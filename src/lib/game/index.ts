import kaplay from 'kaplay';

export type Game = ReturnType<typeof kaplay>;

export function createGame(canvas: HTMLCanvasElement): Game {
	const k = kaplay({
		canvas,
		global: false,
		width: 1280,
		height: 720,
		letterbox: true,
		background: '#050816'
	});

	k.scene('main', () => {
		k.add([
			k.text('Junior Astronaut Mission Trainer', { size: 48 }),
			k.pos(k.center()),
			k.anchor('center')
		]);
	});
	k.go('main');

	return k;
}
