"use client";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "@/public/img-1.jpeg";
import image2 from "@/public/img-2.jpeg";
import image3 from "@/public/img-3.jpeg";
import image4 from "../public/image-1.jpg";
import { client } from "@/sanity/lib/client";
import { Skeleton } from "./ui/skeleton";
export default function Example() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = client
      .fetch(
        `*[_type=='carousel']{
      "fileURL":videoFile.asset->url,
       file_type
    
    }`
      )
      .then((data) => setData((prev) => data));
  }, []);

  if (data) {
    return (
      <Carousel
        id="top"
        autoplay={isPlaying}
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
        {data.map((item, index) => {
          if (item.file_type == "image" || item.file_type == "gif") {
            return (
              <Image
                key={index}
                src={item.fileURL}
                alt="image"
                className="h-full w-full object-cover"
                fill
              />
            );
          } else {
            return (
              <video
                key={index}
                controls
                className="w-full h-full"
                onPlay={() => setIsPlaying((prev) => false)}
                onPause={() => setIsPlaying((prev) => true)}
                type="video"
              >
                <source src={item.fileURL} type="video/mp4" />
                <source src={item.fileURL} type="video/webm" />
                <source src={item.fileURL} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            );
          }
        })}
      </Carousel>
    );
  }

  return <Skeleton className="w-full h-screen bg-gray-300" />;
}
