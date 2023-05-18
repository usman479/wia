"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import image1 from "@/public/img-1.jpeg"
import image2 from "@/public/img-2.jpeg"
import image3 from "@/public/img-3.jpeg"
import image4 from "../public/image-1.jpg"
export default function Example() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
      className="w-full h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        src={image1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        src={image2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        src={image3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}