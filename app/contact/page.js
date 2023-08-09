import React from "react";
import ContactForm from "@/components/contactForm";
import Image from "next/image";
import customerService from "@/public/contact.png";
import texture from "@/public/texture.jpg";

export default function contact() {
  return (
    <>
      <section className="bg-[url('.././public/texture.jpg')] bg-blend-color-dodge bg-white/50 bg-repeat bg-center flex justify-center items-center">
        {/* <div className="absolute inset-0">
          <Image src={texture} alt="background image" fill />
        </div> */}
        <Image src={customerService} alt="customer service" className="" />
      </section>
      <ContactForm />
    </>
  );
}
