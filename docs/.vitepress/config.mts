import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CV of Yuki Yoshikawa",
  description: "吉川 侑希の職務経歴書",
  head: [
    ['link', { rel: 'icon', href: 'favicon/favicon.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [],
    outline: {
      level: [2, 3]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yoshiyu0922/resume' }
    ]
  },
  lastUpdated: true,
})
