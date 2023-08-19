"use client";
import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
// import ReactPlayer from "react-player";

export default function GalleryCard({
  title,
  image,
  videoUrl,
  setIsOpen,
  setFocusedImageIndex,
  index,
}) {
  let imageOrVideo;

  if (image) {
    imageOrVideo = (
      <Image
        className="object-cover object-left lg:object-center "
        src={urlForImage(image).url()}
        alt={title}
        fill
      />
    );
  } else if (videoUrl) {
    imageOrVideo = (
      <>
        <iframe
          // src={`${videoUrl}?autoplay=1&mute=1`}
          src={`${videoUrl}?mute=1&control=0&modestbranding=1`}
          className={`w-full h-full `}
        ></iframe>
        {/* <h3 className="text-6xl absolute top-0 left-[150px]">🎃</h3> */}
      </>
    );
  }

  return (
    <div
      className="flex flex-col group cursor-pointer"
      onClick={() => {
        setFocusedImageIndex((prev) => index);
        setIsOpen(true);
      }}
    >
      <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
        {imageOrVideo}
        {/* <ReactPlayer playing={true} controls={true} muted={true} url='https://www.youtube.com/watch?v=IfbJEgHzgig' /> */}
        <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
          <div>
            <p className="font-bold">{title}</p>
          </div>
        </div>
      </div>

      <p className="mt-5 font-bold flex items-center group-hover:underline">
        View
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 ml-2"
        >
          <path
            fillRule="evenodd"
            d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
            clipRule="evenodd"
          />
        </svg>
      </p>
    </div>
  );
}
