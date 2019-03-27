module.exports = {
  base: '/modulist-vue/',
  title: 'Modulist Vue',
  description: 'Vue components for the Modulist Design System',
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
          'components/tabs',
          'components/textbox'
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
};
