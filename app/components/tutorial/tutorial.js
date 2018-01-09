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
                colume: 1,
                content: ['this is example of text, this is example of text, this is example of text']
              },

              {
                type: 'text',
                colume: 1,
                content: [
                  'this is example of text, this is example of text, this is example of text',
                  'this is example of text, this is example of text, this is example of text'
                ]
              },

              {
                type: 'image',
                src: '',
                des: ''
              }
              
            ],
            [
              // each object is a colume(text, image, video)
              {
                type: 'text',
                colume: 1,
                content: ['this is example of text, this is example of text, this is example of text']
              },

              {
                type: 'text',
                colume: 1,
                content: [
                  'this is example of text, this is example of text, this is example of text',
                  'this is example of text, this is example of text, this is example of text'
                ]
              },

              {
                type: 'image',
                src: '',
                des: ''
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
                content: 'this is example of text, this is example of text, this is example of text'
              },

            ],
            [
              {
                type: 'text',
                colume: 1,
                content: 'this is example of text, this is example of text, this is example of text'
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