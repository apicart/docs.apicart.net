module.exports = {
	ga: 'UA-127787354-4',
	locales: {
		'/': {
			lang: 'English',
			selectText: 'Languages',
			title: 'Apicart',
			description: 'Apicart products and services documentation.'
		},
		'/cs/': {
			lang: 'Čeština',
			selectText: 'Jazyky',
			title: 'Apicart',
			description: 'Dokumentace Apicart produktů a služeb.'
		}
	},
	themeConfig: {
		logo: '/img/logo.png',
		displayAllHeaders: true,
		repo: 'apicart/docs.apicart.net',
		editLinks: true,
		locales: {
			'/': {
				editLinkText: 'Edit this page on GitHub.',
				nav: [
					{ text: 'Home', link: '/' },
					{ text: 'Github', link: 'https://github.com/apicart/docs.apicart.net' },
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
							title: 'Components 1.0',
							collapsable: false,
							children: [
								'components/v1/customer.md',
								'components/v1/cart.md',
								'components/v1/order.md'
							]
						},
						{
							title: 'Other',
							collapsable: false,
							children: [
								'event-dispatcher.md',
								'utils.md',
								'templating-engine.md'
							]
						}
					]
				}
			},
			'/cs/': {
				editLinkText: 'Upravit tuto stránku na GitHubu.',
				nav: [
					{ text: 'Domů', link: '/cs/' },
					{ text: 'Github', link: 'https://github.com/apicart/docs.apicart.net' },
				],
				sidebar: {
					'/cs/': [
						{
						 	title: 'Úvod',
							collapsable: false,
							children: [
								'/cs/'
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
							title: 'Komponenty 1.0',
							collapsable: false,
							children: [
								'komponenty/v1/zakaznik.md',
								'komponenty/v1/kosik.md',
								'komponenty/v1/objednavka.md'
							]
						},
						{
							title: 'Ostatní',
							collapsable: false,
							children: [
								'event-dispatcher.md',
								'utility',
								'sablonovaci-system.md'
							]
						}
					]
				}
			}
		},
		sidebarDepth: 2
	}
};
