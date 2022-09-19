export default {
  language: "zh-CN",
  title: "应许之地",
  titleTemplate: "liuyu.xin 的 wiki",
  description: "liuyu.xin 的 wiki：技术学习、阅读思考、工具技巧",
  appearance: true,
  base: "/",
  ignoreDeadLinks: false,
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/liuyuxin.png" }]],
  themeConfig: {
    siteTitle: "应许之地",
    logo: "/liuyuxin.png",
    lastUpdatedText: "更新",
    async transformHead(ctx) {},
    outline: [2, 3],
    outlineTitle: "文章大纲",
    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/liuyu_xin" },
      { icon: "github", link: "https://github.com/gvenusleo" },
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    footer: {
      message: "Released under the CC BY-NC-SA 4.0 License.",
      copyright: "Copyright © 2022 liuyu.xin",
    },
    nav: [
      {
        text: "关于",
        link: "/about/",
      },
      {
        text: "软件工程",
        link: "/software-engineering/"
      },
      {
        text: "CS 基础",
        items: [{ text: "数据结构", link: "/cs-base/data-structure/01" }],
      },
    ],
    sidebar: {
      "/cs-base/data-structure/": [
        {
          text: "数据结构",
          items: [
            { text: "01 - 数据结构导论", link: "/cs-base/data-structure/01" },
          ]
        }
      ],
      "/software-engineering/": [
        {
          text: "软件工程",
          items: [
            { text: "01 - 软件工程概述", link: "/software-engineering/01" },
          ]
        }
      ]
    },
  },
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
};
