export default [
  {
    title: 'Test title',
    titleContent: null,
    bgColor: '#00bcd4',
    subTitle: ['Sub title 1', 'Sub title 2'],
    content: [{
      title: 'Sub title 1',
      desrciption: 'This is test description for sub title 1(not necessary)',
      // fully content (
      subContent: [
        // content component receive each one
        { 
          articleTitle: 'this is a article title1',
          // one part (one or more row)
          parts: [
            // one row
            [
              // each object is a colume(text, image, video)
              {
                type: 'text',
                content: ['this is example of text, this is example of text, this is example of text','this is example of text, this is example of text, this is example of text','this is example of text, this is example of text, this is example of text'],
                colume: 1,
              },

              {
                type: 'image',
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515495029999&di=4afed8f5dbc5a8b5c7a7f373fa3408ef&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201601%2F18%2F194640qn93322qq79wubw0.png',
                des: '',
                colume: 2,
              }
              
            ],
            [
              // each object is a colume(text, image, video)
              {
                type: 'text',
                content: ['this is example of text, this is example of text, this is example of text'],
                colume: 1,
              },

              {
                type: 'text',
                content: [
                  'this is example of text, this is example of text, this is example of text',
                  'this is example of text, this is example of text, this is example of text'
                ],
                colume: 1
              },

              {
                type: 'image',
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515495029999&di=4afed8f5dbc5a8b5c7a7f373fa3408ef&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201601%2F18%2F194640qn93322qq79wubw0.png',
                des: '',
                colume: 1
              }
              
            ],
          ]
        },
        {
          articleTitle: 'this is a article title2',
          parts: [
            [
              {
                type: 'text',
                colume: 1,
                content: ['this is example of text, this is example of text, this is example of text']
              },

              {
                type: 'video',
                src: 'http://www.wisnuc.com/videos/home_bg.mp4',
                colume: 2
                
              }

            ],
            [
              {
                type: 'text',
                colume: 1,
                content: ['this is example of text, this is example of text, this is example of text']
              }
            ]
          ]
        },
      ]
    }, 
    {
      title: 'Sub title 2',
      subContent: []
    }]
  },
  {
    title: 'Test title 2',
    titleContent: null,
    bgColor: '#00897b',
    subTitle: ['Sub title 1', 'Sub title 2'],
    content: [{
      title: 'sub title 1',
      subContent: []
    }, 
    {
      title: 'sub title 2',
      subContent: []
    }]
  }
]