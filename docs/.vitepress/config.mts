import { defineConfig } from 'vitepress'
import { genYuqueSideBarWithShortUrl } from "../../utils/route";
import { YuQueSVG } from "../../utils/assists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "不肥的肥羊",
  description: "不肥的肥羊",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    [
      'link', { rel: 'icon', href: '/favicon.ico' }
    ],
    [
      'style', {}, 'img{display:inline;vertical-align:middle}'
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-4JFYF249HX' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4JFYF249HX');`
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: [2,6],
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/docs/dflbf17cibf37iuq', activeMatch: '/docs/' },
    ],
    sidebar: {
      // "/docs/": await genYuqueSideBar('/docs'),
      "/docs/": await genYuqueSideBarWithShortUrl('/docs')
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: { svg: YuQueSVG }, link: "https://www.yuque.com/bufeidefeiyang/blog/dflbf17cibf37iuq" },
      { icon: 'github', link: 'https://github.com/yyj08070631/Blaze' }
    ],
    footer: {
      message: 'Powered by <a href="https://www.yuque.com/1874w/yuque-vitepress-template" target="_blank">语雀</a>  & <a href="https://vitepress.dev" target="_blank">VitePress</a> with <a href="https://github.com/LetTTGACO/elog" target="_blank">Elog</a>',
      copyright: 'Copyright © 2023-present'
    },
  },
  sitemap: {
    hostname: 'https://geekhouse.top'
  },
})
