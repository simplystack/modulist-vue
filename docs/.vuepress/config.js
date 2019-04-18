module.exports = {
  base: '/modulist-vue/',
  title: 'Modulist Vue',
  description: 'Vue components for the Modulist Design System',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Directives', link: '/directives/autofocus' },
      { text: 'Github', link: 'http://www.github.com/simplystack/modulist-vue/' },
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          'introduction/guide'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          'components/',
          'components/avatar',
          'components/badge',
          'components/button',
          'components/checkbox',
          'components/checkbox-group',
          'components/dropdown',
          'components/menu',
          'components/modal',
          'components/notification',
          'components/pagination',
          'components/popover',
          'components/progress',
          'components/radio',
          'components/radio-group',
          'components/select',
          'components/spinner',
          'components/stepper',
          'components/table',
          'components/tabs',
          'components/textbox',
          'components/toggle',
        ]
      },
      {
        title: 'Directives',
        collapsable: false,
        children: [
          'directives/autofocus',
          'directives/clickoutside'
        ],
      }
    ]
  },
  plugins: ['@vuepress/register-components'],
  markdown: {
    lineNumbers: true
  }
};
