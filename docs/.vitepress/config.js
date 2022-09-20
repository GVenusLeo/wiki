export default {
  language: "zh-CN",
  title: "应许之地",
  titleTemplate: "liuyu.xin 的 wiki",
  description: "liuyu.xin 的 wiki：技术学习、阅读思考、工具技巧",
  appearance: true,
  base: "/",
  ignoreDeadLinks: false,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "应许之地" }],
    [
      "meta",
      { property: "og:image", content: "https://wiki.liuyu.xin/og.png" },
    ],
    ["meta", { property: "og:url", content: "https://wiki.liuyu.xin" }],
    [
      "meta",
      {
        property: "og:description",
        content: "liuyu.xin 的 wiki：技术学习、阅读思考、工具技巧",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@liuyu_xin" }],
  ],
  themeConfig: {
    siteTitle: "应许之地",
    logo: "/logo.png",
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
    // algolia: {
    //   appId: 'CNJ5CV6WU5',
    //   apiKey: '09e66781efeb3c71b39b68270cadfa5e',
    //   indexName: 'MyWikiSearch',
    //   searchParameters: {
    //     facetFilters: ['tags:cn']
    //   }
    // },
    nav: [
      {
        text: "关于",
        link: "/about/",
      },
      {
        text: "算法",
        link: "/algorithm/",
      },
      {
        text: "软件工程",
        link: "/software-engineering/",
      },
      {
        text: "数学与统计",
        link: "/mathematics-statistics/",
      },
      {
        text: "工具与技巧",
        link: "/tools-tips/",
      },
      {
        text: "CS 基础",
        items: [{ text: "数据结构", link: "/cs-base/data-structure/01" }],
      },
    ],
    sidebar: {
      "/algorithm/": [
        {
          text: "算法",
          items: [
            { text: "01 - 秦九韶算法", link: "/algorithm/01" },
            { text: "02 - 二分法", link: "/algorithm/02" },
          ],
        },
      ],
      "/software-engineering/": [
        {
          text: "软件工程",
          items: [
            { text: "01 - 软件工程概述", link: "/software-engineering/01" },
          ],
        },
      ],
      "/tools-tips/": [
        {
          text: "工具与技巧",
          items: [
            { text: "LaTeX 技巧", link: "/tools-tips/latex" },
            { text: "Git 规范", link: "/tools-tips/git" },
            { text: "Python 转换文件格式", link: "/tools-tips/python-format" },
          ],
        },
      ],
      "/mathematics-statistics/": [
        {
          text: "高等数学(上)",
          collapsible: true,
          items: [
            {
              text: "01 - 映射与函数",
              link: "/mathematics-statistics/advanced-mathematics/01",
            },
            {
              text: "02 - 数列的极限",
              link: "/mathematics-statistics/advanced-mathematics/02",
            },
            {
              text: "03 - 函数的极限",
              link: "/mathematics-statistics/advanced-mathematics/03",
            },
            {
              text: "04 - 无穷大与无穷小",
              link: "/mathematics-statistics/advanced-mathematics/04",
            },
          ],
        },
      ],
      "/cs-base/data-structure/": [
        {
          text: "数据结构",
          items: [
            { text: "01 - 数据结构导论", link: "/cs-base/data-structure/01" },
          ],
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
};
