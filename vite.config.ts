import adapter from '@sveltejs/adapter-static'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// The site is served from https://ilan-deversenne.github.io/frili-quest.github.io/
const BASE = '/frili-quest.github.io'

export default defineConfig(({ command }) => ({
	resolve: {
		alias: { '$lib': '/src/lib' }
	},
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter({
				fallback: 'index.html'
			}),
			paths: {
				base: command === 'build' ? BASE : ''
			}
		})
	]
}))
