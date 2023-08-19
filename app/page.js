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
import { client } from "@/sanity/lib/client";
import Accord from "@/components/Accord";

export const revalidate = 300; // revalidate this page every 60 seconds

async function getFaq() {
  const res = client.fetch(`*[_type=='faq']| order(_createdAt desc)`, {
    next: { revalidate: 300 },
  });

  return res;
}

export default async function Home() {
  const faqs = await getFaq();
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
      <h3 className="text-center text-5xl my-6 px-6 md:px-20  font-bold">
        Frequently asked questions
      </h3>
      <Accord faqs={faqs} />
    </>
  );
}
