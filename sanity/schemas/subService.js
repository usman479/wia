export default {
    name:'subService',
    title:'Sub Service',
    type:'document',
    fields:[
      {
        name:'title',
        title:'Title',
        type:'string'
      },
      {
        name:'description',
        description:'enter short description for the service',
        title:'Description',
        type:'string'
      },
      {
        name: 'image',
        title: 'image',
        type: 'image',
      },
      {
        name:'serviceOf',
        type:'reference',
        to:[
            {
                type:'service'
            }
        ]
    },
    ]
  }