export default {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    { 
        name: "name",
        type:'string',
        readOnly:false
    },
    {
        name:'text',
        type:'text',
        readOnly:false
    },
    {
        name:'image',
        type:'text',
        readOnly:false
    },
    {
        name:'mail',
        type:'text',
        readOnly:false
    },
    {
        name:'post',
        type:'reference',
        to:[
            {
                type:'post'
            }
        ]
    },
    {
        name:'reply',
        type:'reference',
        to:[
            {
                type:'comment'
            }
        ]
    }
],
};
