// import adapterStatic from '@sveltejs/adapter-static'
import adapterVercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// adapter: adapterStatic({
		// 	fallback: 'index.html'
		// })
		adapter: adapterVercel()
	}
};

export default config;
