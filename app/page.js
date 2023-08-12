import Corousel from "@/components/corousel";
import Image from "next/image";
// import UpTheLadder from "@/public/upTheLadder-2.png";
import cartoonCharacters from "/public/cartoon-characters.png";
import Testimonials from "@/components/Testimonials";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <Corousel />
      <section
        className="bg-[url('.././public/texture.jpg')] text-center md:text-left bg-blend-color-dodge bg-white/50 bg-repeat bg-center flex flex-col md:flex-row  items-center gap-y-6 gap-x-24 py-8  px-6 md:px-20 my-12  justify-center "
        id="about-us"
      >
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">WIA MENTORSHIP PROGRAM</h2>
          <h3 className="text-3xl font-semibold">
            Empowering Animation Professionals
          </h3>
          <p className="font-medium">
            Be a part of the WIA Mentorship program as either a mentor or
            mentee, and support WIA members in reaching the next steps in their
            careers.
          </p>
        </div>
        <Image
          src={cartoonCharacters}
          className="w-[80%] h-[80%]  md:w-[50%] md:h-[50%] align-bottom"
          alt="graphics"
        />
      </section>
      <TestimonialCarousel />
      <h3 className="text-center text-4xl my-6 px-6 md:px-20 tracking-wider font-semibold">
        Frequently asked questions
      </h3>
      <Accordion
        type="single"
        collapsible
        className="py-8  px-6 md:px-20 my-12 "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">
            How do you determine pricing of a project?
          </AccordionTrigger>
          <AccordionContent className="text-base  ml-2">
            In this blog post, I want to refine your mental model for Flexbox.
            We'll build an intuition for how the Flexbox algorithm works, by
            learning about each of these properties. Whether you're a CSS
            beginner, or you've been using Flexbox for years, I bet you'll learn
            quite a bit!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">
            Do i retain the rights to my files
          </AccordionTrigger>
          <AccordionContent className="text-base  ml-2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
