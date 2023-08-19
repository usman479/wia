export default {
  name:'carousel',
  type:'document',
  title:'Carousel',
  fields: [
    {
        name: 'file_type',
        title: 'File Type',
        type: 'string',
        options: {
          list: [
            { title: 'Video', value: 'video' },
            { title: 'Image', value: 'image' },
            // { title: 'Gif', value: 'gif' },
            // Add more options as needed
          ],
        },
    },
    {
        name:'videoFile',
        type:'file',
        title:'File (only mp4 file if video)'
    }
  ]
};
