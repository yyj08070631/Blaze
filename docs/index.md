---
layout: home

hero:
  name: 不肥的肥羊
  # text: Web 前端打杂
  tagline: Web 前端打杂
  actions:
    - theme: brand
      text: 开始阅读
      link: /docs/dflbf17cibf37iuq
    - theme: alt
      text: 语雀
      link: https://www.yuque.com/bufeidefeiyang/blog/dflbf17cibf37iuq
    - theme: alt
      text: GitHub
      link: https://github.com/yyj08070631/Blaze

# features:
#   - icon: 📝
#     title: 语雀书写文档
#     details: 更好的在线写作体验，及时备份 markdown 文档到本地
#   - icon: 🚀
#     title: 持续集成
#     details: 结合语雀 Webhooks + Github Actions + Vercel，写完及时同步到文档站点
#   - icon: 📦
#     title: 开箱即用
#     details: 简单配置仓库即可部署属于你的文档站点
---

<script setup>
import RecentPosts from './components/recent-posts.vue'
</script>

### 最近文章

<RecentPosts />