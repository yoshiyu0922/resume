import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CV of Yuki Yoshikawa",
  description: "吉川 侑希の職務経歴書",
  base: '/resume/',
  head: [
    ['link', { rel: 'icon', href: 'favicon/favicon.png' }],
    // ogp
    ['meta', { property: 'og:image', content: 'https://yoshiyu0922.github.io/resume/images/thumbnail.png' }],
    ['meta', { property: 'og:title', content: 'CV of Yuki Yoshikawa' }],
    ['meta', { property: 'og:description', content: 'ソフトウェアエンジニア 吉川 侑希の職務経歴書' }],
    ['meta', { property: 'og:url	', content: 'https://yoshiyu0922.github.io/resume' }],
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
