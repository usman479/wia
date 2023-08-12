"use client";
import React from "react";
// import { Transition } from "@headlessui/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  StarHalf,
  StarHalfIcon,
  StarIcon,
  StarOff,
  StarOffIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import star from "@/public/star.png";

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    client
      .fetch(`*[_type == 'testimonial'] | order(_createdAt desc)`)
      .then((data) => setTestimonials(data));
  }, []);
  let noOfStars;
  if (testimonials && testimonials.length > 0) {
    if (testimonials[currentIndex].stars == 1) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
        </>
      );
    } else if (testimonials[currentIndex].stars == 1.5) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
          <StarHalf fill="orange" strokeWidth={0} size={40} />
        </>
      );
    } else if (testimonials[currentIndex].stars == 2) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
        </>
      );
    } else if (testimonials[currentIndex].stars == 2.5) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <StarHalf fill="orange" strokeWidth={0} size={40} />
        </>
      );
    } else if (testimonials[currentIndex].stars == 3) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
        </>
      );
    } else if (testimonials[currentIndex].stars == 3.5) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <StarHalf fill="orange" strokeWidth={0} size={40} />
        </>
      );
    } else if (testimonials[currentIndex].stars == 4) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
        </>
      );
    } else if (testimonials[currentIndex].stars == 4.5) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <StarHalf fill="orange" strokeWidth={0} size={40} />
        </>
      );
    } else if (testimonials[currentIndex].stars == 5) {
      noOfStars = (
        <>
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
          <Star fill="orange" strokeWidth={0} size={40} />
        </>
      );
    }
  }

  return (
    <>
      {/* <div className=""></div> */}
      <h2 className="text-center text-4xl my-6 px-6 md:px-20 tracking-wider font-semibold">
        Testimonials
      </h2>

      {testimonials && testimonials.length > 0 ? (
        <Transition
          show={!!(currentIndex + 1)}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex flex-col justify-center items-center gap-y-6 py-8  px-6 md:px-20 mb-12  ">
            <div className="flex gap-x-6 items-center select-none">
              <ArrowLeft
                className="hover:bg-gray-200 rounded-md cursor-pointer "
                size={40}
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev == 0 ? testimonials.length - 1 : prev - 1
                  )
                }
              />
              <Avatar className="h-52 w-52 ">
                <AvatarImage
                  src={urlForImage(testimonials[currentIndex].image).url()}
                  className="object-center object-cover"
                />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <ArrowRight
                className="hover:bg-gray-200 rounded-md cursor-pointer"
                size={40}
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev == testimonials.length - 1 ? 0 : prev + 1
                  )
                }
              />
            </div>
            <p className="text-4xl font-bold">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-3xl tracking-wide text-gray-700">
              {testimonials[currentIndex].profession}
              {/* Web Developer */}
            </p>
            <p className="text-center text-lg duration-500 text-gray-700">
              {testimonials[currentIndex].text}
            </p>

            <div className="STARS flex gap-x-2 justify-center items-start">
              {noOfStars}
              {/* <Image src={star} alt="star" className="w-8 h-8" />
              <Image src={star} alt="star" className="w-8 h-8" />
              <Image src={star} alt="star" className="w-8 h-8" />
              <Image src={star} alt="star" className="w-8 h-8" />
              <Image src={star} alt="star" className="w-8 h-8" /> */}
              {/* <Star fill="orange" strokeWidth={0} size={40} />
              <Star fill="orange" strokeWidth={0} size={40} />
              <Star fill="orange" strokeWidth={0} size={40} />
              <Star fill="orange" strokeWidth={0} size={40} />
              <StarHalf fill="orange" strokeWidth={0} size={40} /> */}
            </div>
          </div>
        </Transition>
      ) : (
        <div className="flex justify-center items-center text-2xl">
          Loading...
        </div>
      )}
    </>
  );
}
