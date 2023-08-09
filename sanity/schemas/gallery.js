export default {
    name:'gallery',
    title:'Gallery',
    type:'document',
    fields: [
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) =>
              Rule.custom((field, context) => {
                if (context.document.videoUrl === undefined && field === undefined) {
                  return "Either Video url or Image must have a value";
                } else if (context.document.videoUrl && field) {
                  return "Video url and Image both can not be submitted";
                } else {
                  return true;
                }
              }),
          },
        {
            name: "videoUrl",
            title: "Video Embed Url",
            type: "string",
            validation: (Rule) =>
            Rule.custom((field, context) => {
              if (context.document.image === undefined && field === undefined) {
                return "Either Video url or Image must have a value";
              } else if (context.document.image && field) {
                return "Video url and Image both can not be submitted";
              } else {
                return true;
              }
            }),
          },
    ]

}