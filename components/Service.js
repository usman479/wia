"use client";
import ReactPlayer from "react-player/youtube";
import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

export default function Service({
  position,
  image,
  title,
  description,
  id,
  videoUrl,
}) {
  let pos;
  let exploreButton = null;
  let imageOrVideo;
  if (position % 2 == 0) {
    pos = {
      image: 1,
      text: 2,
    };
  } else {
    pos = {
      image: 2,
      text: 1,
    };
  }
  if (id) {
    exploreButton = (
      <ClientSideRoute route={`/service/${id}`}>
        <button className="bg-red-600 text-white px-6 py-2 border  border-white shadow-lg hover:scale-105 duration-200 tracking-wider ">
          EXPLORE
        </button>
      </ClientSideRoute>
    );
  }
  if (image) {
    imageOrVideo = (
      <Image
        src={urlForImage(image).url()}
        className={`md:order-${pos.image}`}
        alt="Service"
        width={600}
        height={500}
      />
    );
  } else if (videoUrl) {
    imageOrVideo = (
      <iframe
        src={`${videoUrl}?autoplay=1&mute=1`}
        className={`w-full h-[22rem] md:order-${pos.image}`}
      ></iframe>
    );
  }
  return (
    <>
      <div className="grid md:grid-cols-2  gap-y-6 gap-x-12 items-center">
        <div
          className={`space-y-4 text-center md:text-left md:order-${pos.text}`}
        >
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="font-medium">{description}</p>
          {exploreButton}
        </div>
        {imageOrVideo}
      </div>
      <hr></hr>
    </>
  );
}
