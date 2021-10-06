const { config } = require("vuepress-theme-hope");
const utils = require('./utils')

module.exports = config({
  title: "半兮酱紫の博客",
  // description: "A blog for 半兮酱紫",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "en-CH",
    }
  },

  themeConfig: {
    themeColor: false,
    logo: "/logo.svg",
    hostname: "https://Lanzhii.github.io",

    author: "半兮 酱紫",
    repo: "https://github.com/Lanzhii/Lanzhii.github.io",

    nav: [
      { text: "首页", link: "/", icon: "home" },
      {
        text: "烂笔头",
        icon: "icon-workingDirectory",
        items: [
          {
            text: "CS基础",
            link :"/CS/",           
          },
          {
            text: "前端",
            items: [
              {
                text: "语言基础",
                link :"/FE/bisis/",           
              },
              {
                text: "MVVM",
                link: "/FE/MVVM"
              },
              {
                text: "前端工程化",
                link: "/FE/engineering/"
              },
            ]
          },
          {
            text: "服务端",
            link: "/BE/"
          },
        ]
      },
      {
        text: "时间线",
        icon: "creative",
        link: "/timeline/",
      },
      {
        text: "回顾",
        icon: "creative",
        link: "/guide/",
      },
      {
        text: "闲思",
        icon: "note",
        link: "/logs/"
      },
    ],

    sidebar: utils.inferSiderbars(),

    blog: {
      avatar: "/avatar.svg",
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https:/ihu.com",
        Baidu: "https://baidu.com",
        Github: "https://github.com",
      },
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
  repoDisplay: false,
  backToTop: true
});
