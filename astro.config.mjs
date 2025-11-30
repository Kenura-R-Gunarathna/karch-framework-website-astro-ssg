// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://karch.krag.lk',
	integrations: [
		starlight({
			title: 'KARCH',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/karch-logo.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Kenura-R-Gunarathna/KARCH-Framework' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Installation', slug: 'installation' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Database Queries', slug: 'database-queries' },
						{ label: 'Controllers', slug: 'controllers' },
						{ label: 'Requests', slug: 'requests' },
						{ label: 'Routes', slug: 'routes' },
						{ label: 'Migrations', slug: 'migrations' },
						{ label: 'Error Handling', slug: 'error-handling' },
						{ label: 'Special Functions', slug: 'special-functions' },
					],
				},
			],
			components: {
				Footer: './src/components/CustomFooter.astro',
			},
		}),
	],
});
