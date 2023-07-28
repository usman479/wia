// "use client";
import React from "react";
import Image from "next/image";
import Img1 from "/public/img-1.jpeg";
import Img2 from "/public/img-2.jpeg";
import Img3 from "/public/img-3.jpeg";
// import { useState } from "react";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import GalleryCard from "@/components/GalleryCard";
import Gallery from "@/components/Gallery";

async function getGallery() {
  const gallery = await client.fetch(`*[_type == 'gallery']`);

  return gallery;
}

export default async function portfolioPage() {
  const gallery = await getGallery();

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-center py-4 bg-gradient-to-r from-red-600 to-gray-600 inline-block text-transparent bg-clip-text tracking-wider text-red-600 ">
          PORTFOLIO
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-24">
        <Gallery gallery={gallery} />
      </div>
    </div>
  );
}
