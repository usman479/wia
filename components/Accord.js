"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Accord({ faqs }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="py-8  px-6 md:px-20 my-12 bg-[url('.././public/texture.jpg')] bg-blend-color-dodge bg-white/50 bg-repeat bg-center"
    >
      {faqs.map((faq, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-lg font-medium text-left ">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="font-medium  ml-2">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
