export default {
    name:'service',
    title:'Service',
    type:'document',
    fields:[
      {
        name:'title',
        title:'Title',
        type:'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name:'description',
        description:'enter short description for the service',
        title:'Description',
        type:'string'
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
      }
    ]
  }