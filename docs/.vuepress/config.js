module.exports = {
	ga: 'UA-127787354-4',
	locales: {
		'/': {
			lang: 'English',
			selectText: 'Languages',
			title: 'Apicart',
			description: 'Apicart products and services documentation.'
		},
		'/cs-cz/': {
			lang: 'Čeština',
			selectText: 'Jazyky',
			title: 'Apicart',
			description: 'Dokumentace Apicart produktů a služeb.'
		}
	},
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicons/favicon-16x16.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicons/favicon-32x32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/img/favicons/favicon-96x96.png' }],
		['meta', { name: 'theme-color', content: '#ffffff'}]
	],
	themeConfig: {
		logo: '/img/logo.png',
		displayAllHeaders: true,
		repo: 'apicart/docs.apicart.net',
		docsDir: 'docs',
		editLinks: true,
		locales: {
			'/': {
				editLinkText: 'Edit this page on GitHub.',
				nav: [
					{ text: 'Home', link: '/' },
				],
				sidebar: {
					'/': [
						{
							title: 'Introduction',
							collapsable: false,
							children: [
								'/'
							]
						},
						{
							title: 'CDN',
							collapsable: false,
							children: [
								'cdn/components-configuration.md',
								'cdn/accessing-files.md'
							]
						},
						{
							title: 'API',
							collapsable: false,
							children: [
								'api/store-api.md',
							]
						},
						{
							title: 'Web Components 1.0',
							collapsable: false,
							children: [
								'components/web/v1/components-list.md',
								'components/web/v1/customer.md',
								'components/web/v1/cart.md',
								'components/web/v1/order.md'
							]
						},
						{
							title: 'Web Components - others',
							collapsable: false,
							children: [
								'event-dispatcher.md',
								'utils.md',
								'templating-engine.md'
							]
						},
						{
							title: 'SDK',
							collapsable: false,
							children: [
								'sdk/php/php.md',
							]
						}
					]
				}
			},
			'/cs-cz/': {
				editLinkText: 'Upravit tuto stránku na GitHubu.',
				nav: [
					{ text: 'Domů', link: '/cs-cz/' }
				],
				sidebar: {
					'/cs-cz/': [
						{
						 	title: 'Úvod',
							collapsable: false,
							children: [
								'/cs-cz/'
							]
						},
						{
							title: 'CDN',
							collapsable: false,
							children: [
								'cdn/konfigurace-komponent.md',
								'cdn/pristup-k-souborum.md'
							]
						},
						{
							title: 'API',
							collapsable: false,
							children: [
							 	'api/store-api.md',
							]
						},
						{
							title: 'Webové komponenty 1.0',
							collapsable: false,
							children: [
								'komponenty/web/v1/seznam-komponent.md',
								'komponenty/web/v1/kosik.md',
								'komponenty/web/v1/objednavka.md',
								'komponenty/web/v1/zakaznik.md'
							]
						},
						{
							title: 'Webové komponenty - ostatní',
							collapsable: false,
							children: [
								'event-dispatcher.md',
						 		'utility',
								'sablonovaci-system.md'
							]
						},
						{
							title: 'SDK',
							collapsable: false,
							children: [
								'sdk/php/php.md',
							]
						}
					]
				}
			}
		},
		sidebarDepth: 2
	}
};
