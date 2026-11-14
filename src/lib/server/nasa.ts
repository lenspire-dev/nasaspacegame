import axios from 'axios';
import { NASA_API_KEY } from '$app/env/private';

export const nasa = axios.create({
	baseURL: 'https://api.nasa.gov',
	timeout: 10_000,
	params: { api_key: NASA_API_KEY }
});
