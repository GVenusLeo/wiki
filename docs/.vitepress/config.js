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
      message: "Released under the CC-BY-SA-4.0 License.",
      copyright: "Copyright © 2022 liuyu.xin",
    },
    editLink: {
      pattern: "https://github.com/gvenusleo/wiki/tree/main/docs/:path",
      text: "在 Github 上编辑此页",
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
        text: "阅读",
        link: "/read/",
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
        items: [
          { text: "C 程序设计", link: "/cs-base/c-language/01" },
          { text: "数据结构", link: "/cs-base/data-structure/01" },
        ],
      },
    ],
    sidebar: {
      "/read/": [
        {
          text: "阅读",
          items: [
            { text: "超越金融：索罗斯的哲学", link: "/read/02" },
            { text: "当尼采哭泣", link: "/read/01" },
          ],
        },
      ],
      "/algorithm/": [
        {
          text: "算法",
          items: [
            { text: "秦九韶算法", link: "/algorithm/horner-method" },
            { text: "二分法", link: "/algorithm/dichotomy" },
            { text: "数制转换", link: "/algorithm/numeric-conversion" },
            { text: "括号匹配检验", link: "/algorithm/bracket-matching" },
            { text: "汉诺塔问题", link: "/algorithm/hanoi-tower" },
          ],
        },
      ],
      "/software-engineering/": [
        {
          text: "软件工程",
          items: [
            { text: "01 - 软件工程概述", link: "/software-engineering/01" },
            { text: "02 - 软件过程", link: "/software-engineering/02" },
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
            { text: "02 - 线性表", link: "/cs-base/data-structure/02" },
            { text: "03 - 栈和队列", link: "/cs-base/data-structure/03"},
          ],
        },
      ],
      "/cs-base/c-language/": [
        {
          text: "C 程序设计",
          items: [
            { text: "01 - C 语言导论", link: "/cs-base/c-language/01" },
            { text: "02 - 数据类型", link: "/cs-base/c-language/02" },
            { text: "03 - 输入与输出", link: "/cs-base/c-language/03" },
            { text: "04 - 选择语句", link: "/cs-base/c-language/04" },
            { text: "05 - 循环语句", link: "/cs-base/c-language/05" },
            { text: "06 - 数组", link: "/cs-base/c-language/06" },
            { text: "07 - 函数", link: "/cs-base/c-language/07" },
            { text: "08 - 指针", link: "/cs-base/c-language/08" },
            { text: "09 - 自定义数据类型", link: "/cs-base/c-language/09" },
            { text: "10 - 文件操作", link: "/cs-base/c-language/10" },
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
