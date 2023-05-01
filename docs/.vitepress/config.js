import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: baseConfig,
  base: '/codelog/',
  lang: "tr-TR",
  title: "CodeLog",
  description: "Yazılım ile ilgili notlarım",
  lastUpdated: false,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'CodeLog',
    editLink: {
      pattern: 'https://github.com/mahmutoz/codelog/edit/main/docs/:path',
      text: 'Bu sayfayı düzenle',
    },
    search: {
      search: {
        provider: 'algolia',
        options: {
          appId: '...',
          apiKey: '...',
          indexName: '...'
        }
      }
    },
    docFooter: {
      prev: 'Önceki Sayfa',
      next: 'Sonraki Sayfa',
    },
    outline: {
      label: 'Sayfa İçeriği',
    },
    nav: [
      {
        text: 'Notlar',
        items: [
          { text: 'NodeJS', link: '/notlar/nodejs/' },
          { text: 'Express', link: '/notlar/express/' },
        ]
      },
      { text: 'Kaynaklar', link: '/kaynaklar/' },
      { text: 'Mülakat Soruları', link: '/mulakat-sorulari/' },
    ],

    sidebar: {
      "/notlar/": notesSidebar(),
      "/kaynaklar": sourcesSidebar(),
      "/mulakat-sorulari": interviewSidebar(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mahmutoz' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mahmutoz/' },
      { icon: 'instagram', link: 'https://www.instagram.com/mahmuuttz/' },
    ]
  }
})

function notesSidebar() {
  return [
    {
      text: 'Başlangıç',
      link: '/notlar/',
    },
    {
      text: "NodeJS",
      collapsed: true,
      items: [
        {text: 'Giriş', link: '/notlar/nodejs/'},
        {text: 'Web Sunucusu Oluşturma', link: '/notlar/nodejs/web-sunucusu-olusturma'},
        {text: 'Html Ekleme', link: '/notlar/nodejs/html-ekleme'},
        {text: 'package.json Ayarları', link: '/notlar/nodejs/package-json-ayarlari'},
      ]
    },
    {
      text: "Express",
      collapsed: true,
      items: [
        {text: 'Giriş', link: '/notlar/express/'},
        {text: 'Middleware', link: '/notlar/express/middleware'}
      ]
    }
  ]
}

function sourcesSidebar() {
  return [
    {
      text: 'Başlangıç',
      items: [
        {text: 'Giriş', link: '/kaynaklar/'},
        {text: 'CSS', link: '/kaynaklar/css'},
        {text: 'JavaScript', link: '/kaynaklar/javascript'},
      ]
    }
  ]
}

function interviewSidebar() {
  return [
    {
      text: 'Başlangıç',
      link: '/mulakat-sorulari/',
      items: [
        {text: 'HTML', link: '/mulakat-sorulari/html'}
      ]
    }
  ]
}
