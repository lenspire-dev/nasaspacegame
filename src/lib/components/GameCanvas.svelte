<script lang="ts">
	import { onMount } from 'svelte';
	import type { Game } from '#lib/game/index.js';

	let canvas: HTMLCanvasElement | undefined = $state();
	let game: Game | null = null;

	onMount(() => {
		let disposed = false;

		if (canvas) {
			void import('#lib/game/index.js').then(({ createGame }) => {
				if (disposed || game || !canvas) return;
				game = createGame(canvas);
			});
		}

		return () => {
			disposed = true;
			game?.quit();
			game = null;
		};
	});
</script>

<div class="relative aspect-video w-full">
	<canvas bind:this={canvas} class="absolute inset-0 h-full w-full"></canvas>
</div>
