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
          'components/tabs',
          'components/textbox',
          'components/toggle',
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  },
};
