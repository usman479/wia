// import React from "react";
// import { CardHeader, CardTestimonial, CardText } from "./TestimonialCards.js";
// import { testimonialsData as testimonials } from "./testimonialsData";
// // import patternQuotation from '@/public/bg-pattern-quotation.svg'

// export default function Testimonials() {
//   return (
//     <main
//       className="font-barlow my-16 text-white grid gap-6 pt-4
//     md:grid-cols-2 xl:grid-cols-4 2xl:mx-auto 2xl:max-w-8xl px-6 md:px-20"
//     >
//       <figure
//         className="card1 shadow-xl rounded-lg relative z-10 p-8
//       md:hover:scale-105 duration-300 md:col-span-2 bg-red-600"
//       >
//         {/* <img
//           className="absolute top-0 right-8 w-28 -z-10 xl:right-20"
//           src={patternQuotation}
//           alt="Background svg"
//         /> */}
//         <CardHeader
//           img={
//             "https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg"
//           }
//           name={testimonials.testimonialOne.name}
//         />
//         <CardText text={testimonials.testimonialOne.text} />
//         <CardTestimonial
//           testimonial={testimonials.testimonialOne.testimonial}
//         />
//       </figure>
//       <figure
//         className="card2 shadow-xl rounded-lg p-8
//       md:hover:scale-105 duration-300 bg-gray-600"
//       >
//         <CardHeader
//           img={
//             "https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg"
//           }
//           name={testimonials.testimonialTwo.name}
//         />
//         <CardText text={testimonials.testimonialTwo.text} />
//         <CardTestimonial
//           testimonial={testimonials.testimonialTwo.testimonial}
//         />
//       </figure>
//       <figure
//         className="card3 shadow-xl rounded-lg p-8
//       md:hover:scale-105 duration-300 bg-white text-black"
//       >
//         <CardHeader
//           img={
//             "https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg"
//           }
//           name={testimonials.testimonialThree.name}
//         />
//         <CardText text={testimonials.testimonialThree.text} />
//         <CardTestimonial
//           testimonial={testimonials.testimonialThree.testimonial}
//         />
//       </figure>
//       <figure
//         className="card4 shadow-xl rounded-lg p-8
//       md:col-span-2 md:hover:scale-105 duration-300 bg-gray-800"
//       >
//         <CardHeader
//           img={
//             "https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg"
//           }
//           name={testimonials.testimonialFour.name}
//         />
//         <CardText text={testimonials.testimonialFour.text} />
//         <CardTestimonial
//           testimonial={testimonials.testimonialFour.testimonial}
//         />
//       </figure>
//       <figure
//         className="card5 shadow-xl rounded-lg p-8
//       md:hover:scale-105 duration-300 md:col-span-2
//       xl:row-start-1 xl:row-end-3 xl:col-span-1 xl:col-start-4 text-black bg-white"
//       >
//         <CardHeader
//           img={
//             "https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450.jpg"
//           }
//           name={testimonials.testimonialFive.name}
//         />
//         <CardText text={testimonials.testimonialFive.text} />
//         <CardTestimonial
//           testimonial={testimonials.testimonialFive.testimonial}
//         />
//       </figure>
//     </main>
//   );
// }

import React from "react";

async function getTestimonials() {
  const res = await client.fetch(
    `*[_type == 'testimonial'] | order(_createdAt desc)`
  );
  return res;
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return <div>Testimonials</div>;
}
