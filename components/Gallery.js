"use client";
import React from "react";
import GalleryCard from "./GalleryCard";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";

export default function Gallery({ gallery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedImageIndex, setFocusedImageIndex] = useState(0);

  //   console.log(urlForImage(gallery[0].image).url());

  return (
    <>
      {gallery.map((pic, index) => {
        return (
          <GalleryCard
            title={pic.title}
            image={pic.image}
            videoUrl={pic.videoUrl}
            key={pic._id}
            index={index}
            setIsOpen={setIsOpen}
            setFocusedImageIndex={setFocusedImageIndex}
          />
        );
      })}

      <div
        className={cn("fixed top-0 left-0 bg-black/90 h-full w-full z-50", {
          block: isOpen,
          hidden: !isOpen,
        })}
      >
        <span
          className="absolute top-0 right-[10px] text-6xl font-light text-white cursor-pointer z-[100] select-none hover:bg-white/20 rounded-lg px-4"
          onClick={() => setIsOpen(false)}
        >
          x
        </span>
        <span
          className="absolute top-[50%] right-3 text-5xl text-white select-none cursor-pointer  hover:bg-white/20 rounded-lg px-4"
          onClick={() => {
            setFocusedImageIndex((prev) =>
              prev == gallery.length - 1 ? 0 : prev + 1
            );
          }}
        >
          {">"}
          {/* <ArrowBigRight className=""/> */}
        </span>
        <span
          className="absolute top-[50%] left-3 text-5xl text-white select-none cursor-pointer hover:bg-white/20 rounded-lg px-4"
          onClick={() => {
            setFocusedImageIndex((prev) =>
              prev == 0 ? gallery.length - 1 : prev - 1
            );
          }}
        >
          {"<"}
        </span>

        {gallery[focusedImageIndex].image ? (
          <div className="overflow-hidden bg-none absolute top-[50%] left-[50%]  w-[65%] 2xl:w-auto -translate-y-[50%] -translate-x-[50%] ">
            <div className="bg-white">
              <p className="text-2xl text-center text-white bg-black/90">
                {gallery[focusedImageIndex].title}
              </p>
            </div>
            <Image
              src={urlForImage(gallery[focusedImageIndex].image).url()}
              alt="image"
              className="object-cover"
              height={900}
              width={900}
            />
          </div>
        ) : (
          <div className="overflow-hidden bg-none absolute top-[50%] left-[50%]  w-[65%] 2xl:min-w-fit -translate-y-[50%] -translate-x-[50%] ">
            <div className="bg-white">
              <p className="text-2xl text-center text-white bg-black/90">
                {gallery[focusedImageIndex].title}
              </p>
            </div>
            <iframe
              src={`${gallery[focusedImageIndex].videoUrl}?autoplay=1&mute=${isOpen ? '1' : '0'}`}
              className={`w-full h-96 `}
            ></iframe>
          </div>
        )}
        {/* <p>Like Comment Share</p> */}
      </div>
    </>
  );
}
