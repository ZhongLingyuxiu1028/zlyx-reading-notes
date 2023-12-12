import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "读书笔记",
      icon: "book",
      prefix: "reading-notes/",
      link: "reading-notes/",
      children: []
    },
    {
      text: "音乐分享",
      icon: "music",
      prefix: "music-notes/",
      link: "music-notes/",
      children: [
        {
          text: "苏打绿",
          icon: "fish",
          prefix: "sodagreen/",
          // 可选的, 设置分组是否可以折叠，默认值是 false,
          collapsible: true,
          children: [
            "",
          ]
        },
        {
          text: "吴青峰",
          icon: "wind",
          prefix: "wuqingfeng/",
          // 可选的, 设置分组是否可以折叠，默认值是 false,
          collapsible: true,
          children: [
              "",
              {
                text: "专辑心得",
                icon: "wind",
                prefix: "album-notes/",
                collapsible: true,
                children: [

                ]
              }
          ]
        }
      ],
    },
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
  ],
});
