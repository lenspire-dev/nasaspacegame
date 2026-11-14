import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	NASA_API_KEY: {
		schema: (value) => value ?? 'DEMO_KEY'
	}
});
