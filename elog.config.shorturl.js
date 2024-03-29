module.exports = {
  write: {
    platform: 'yuque',
    // Token 模式（需要语雀超级会员）
    yuque: {
      token: process.env.YUQUE_TOKEN,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    },
    // 账号密码模式
    "yuque-pwd": {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PASSWORD,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/docs',
      filename: 'urlname',
      format: 'markdown',
      formatExt: './elog.format.js',
      frontMatter: {
        enable: true,
      }
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: './docs/images',
      pathFollowDoc: true,
    }
  }
}
