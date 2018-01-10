export default [
  // {
  //   title: 'Test title',
  //   titleContent: null,
  //   bgColor: '#00bcd4',
  //   subTitle: ['教程（新手入门）'],
  //   content: [{
  //     title: '教程（新手入门）',
  //     desrciption: ' ',
  //     subContent: [
  //       // content component receive each one
  //       { 
  //         articleTitle: '入门视频',
  //         // one part (one or more row)
  //         parts: [
  //           // one row
  //           [
  //             // each object is a colume(text, image, video)
  //             {
  //               type: 'text',
  //               content: ['WISNUC系统是上海闻上信息科技有限公司自主研发的家庭私有云操作系统，本系统可能存在您不熟悉的内容，因此我们简单介绍系统的使用方法，帮助您快速上手使用。'],
  //               colume: 1,
  //             },

  //             {
  //               type: 'video',
  //               src: require('Video/WISNUC_init.mp4'),
  //               des: '',
  //               colume: 2,
  //             }
              
  //           ],
  //           [
  //             // each object is a colume(text, image, video)
  //             {
  //               type: 'text',
  //               content: ['this is example of text, this is example of text, this is example of text'],
  //               colume: 1,
  //             },

  //             {
  //               type: 'text',
  //               content: [
  //                 'this is example of text, this is example of text, this is example of text',
  //                 'this is example of text, this is example of text, this is example of text'
  //               ],
  //               colume: 1
  //             },

  //             {
  //               type: 'image',
  //               src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515495029999&di=4afed8f5dbc5a8b5c7a7f373fa3408ef&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201601%2F18%2F194640qn93322qq79wubw0.png',
  //               des: '',
  //               colume: 1
  //             }
              
  //           ],
  //         ]
  //       },
  //       {
  //         articleTitle: 'this is a article title2',
  //         parts: [
  //           [
  //             {
  //               type: 'text',
  //               colume: 1,
  //               content: ['this is example of text, this is example of text, this is example of text']
  //             },

  //             {
  //               type: 'video',
  //               src: 'http://www.wisnuc.com/videos/home_bg.mp4',
  //               colume: 2
                
  //             }

  //           ],
  //           [
  //             {
  //               type: 'text',
  //               colume: 1,
  //               content: ['this is example of text, this is example of text, this is example of text']
  //             }
  //           ]
  //         ]
  //       },
  //     ]
  //   }]
  // },
  {
    title: 'Test title 2',
    titleContent: null,
    bgColor: '#00bcd4',
    subTitle: ['系统安装'],
    content: [{
      title: '系统安装',
      desrciption: '',
      subContent: [{
        articleTitle: '简介',
        parts: [
          [
            // each object is a colume(text, image, video)
            {
              type: 'text',
              content: ['WS215i设备在出厂时已经配备WISNUC系统，并可自动升级。', '此外，WISNUC系统作为开源软件，X86用户可在http:\/\/bbs.wisnuc.com获得关于系统安装和使用的相关资料，过程中如遇到任何问题，您可在论坛上提交，将会得到及时的帮助解答。'],
              colume: 1,
            },

            {
              type: 'text',
              content: [],
              colume: 1,
            },
            
          ]
        ]
      }]
    }]
  },
  {
    title: 'Test title 3',
    titleContent: null,
    bgColor: '#00897b',
    subTitle: ['设备初始化'],
    content: [{
      title: '设备初始化',
      subContent: [{
        articleTitle: '视频教程',
        parts: [
          [
            // each object is a colume(text, image, video)
            {
              type: 'text',
              content: ['安装好系统后，您需要下载WISNUC PC客户端，并且跟随PC客户端的指示完成设备的初始化操作。'],
              colume: 1,
            },

            {
              type: 'video',
              src: require('Video/WISNUC_init.mp4'),
              des: '',
              colume: 2,
            }
            
          ]
        ]
      }]
    }]
  },
  {
    title: 'Test title 4',
    titleContent: null,
    bgColor: '#3949ab',
    subTitle: ['微信绑定'],
    content: [{
      title: '微信绑定',
      subContent: [{
        articleTitle: '视频教程',
        parts: [
          [
            // each object is a colume(text, image, video)
            {
              type: 'text',
              content: ['在初始化过程中，您可以直接绑定微信，如您在初始化过程中跳过微信绑定，在进入PC客户端后也可完成微信绑定。'],
              colume: 1,
            },

            {
              type: 'video',
              src: require('Video/WISNUC_wechat.mp4'),
              des: '',
              colume: 2,
            }
            
          ]
        ]
      }]
    }]
  },
  {
    title: 'Test title 5',
    titleContent: null,
    // bgColor: '#fb8c00',
    bgColor: '#ad1457',
    subTitle: ['共享盘'],
    content: [{
      title: '共享盘',
      subContent: [{
        articleTitle: '视频教程',
        parts: [
          [
            // each object is a colume(text, image, video)
            {
              type: 'text',
              content: ['WISNUC系统提供了共享盘功能，您可以轻松创建共享盘，并将自己账户下的文件照片分享给其他用户。'],
              colume: 1,
            },

            {
              type: 'video',
              src: require('Video/WISNUC_share.mp4'),
              des: '',
              colume: 2,
            }
            
          ]
        ]
      }]
    }]
  },
  {
    title: 'Test title 6',
    titleContent: null,
    bgColor: '#8e24aa',
    subTitle: ['维护模式'],
    content: [{
      title: '维护模式',
      subContent: [{
        articleTitle: '视频教程',
        parts: [
          [
            // each object is a colume(text, image, video)
            {
              type: 'text',
              content: ['在初始化或系统过程中，对于硬盘文件内残留信息或系统出现异常导致崩溃等情况，WISNUC系统提供了维护模式，可以方便您快速便捷地恢复正常使用。'],
              colume: 1,
            },

            {
              type: 'video',
              src: require('Video/WISNUC_maintain.mp4'),
              des: '',
              colume: 2,
            }
            
          ]
        ]
      }]
    }]
  },
]