import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: baseConfig,
  lang: "tr-TR",
  title: "CodeLog",
  description: "Yazılım ile ilgili notlarım",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'CodeLog',
    editLink: {
      pattern: 'https://github.com/mahmutoz/codelog/edit/main/docs/:path',
      text: 'Bu sayfayı düzenle',
    },
    docFooter: {
      prev: 'Önceki Sayfa',
      next: 'Sonraki Sayfa',
    },
    outline: {
      label: 'Sayfa İçeriği',
    },
    nav: [
      { text: 'Anasayfa', link: '/' },
      { text: 'Notlar', link: '/notlar/' },
      { text: 'Kaynaklar', link: '/kaynaklar/' },
    ],

    sidebar: {
      "/notlar": notesSidebar(),
      "/kaynaklar": sourcesSidebar(),
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
      collapsed: false,
      items: [
        {text: 'Giriş', link: 'notlar/nodejs/'},
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
