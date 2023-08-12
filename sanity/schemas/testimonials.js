export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "profession",
      title: "Profession",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "stars",
      title: "Stars",
      type: "number",
      validation: (Rule) =>
      Rule.custom((field, context) => {
        if(field == 1 || field == 1.5 ||field == 2 ||field == 2.5 ||field == 3 ||field == 3.5 ||field == 4 ||field == 4.5 ||field == 5){
          return true;
        } 
        return 'Enter one of these values "1" "1.5" "2" "2.5" "3" "3.5" "4" "4.5" "5"'
      }),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
