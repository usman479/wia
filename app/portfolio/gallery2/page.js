"use client";
import React from "react";
import Image from "next/image";
import Img1 from "/public/img-1.jpeg";
import Img2 from "/public/img-2.jpeg";
import Img3 from "/public/img-3.jpeg";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function GalleryPage2() {
  const [isOpen, setIsOpen] = useState({
    opened: false,
    src: Img1,
  });

  console.log(isOpen);

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-center py-4 bg-gradient-to-r from-red-600 to-gray-600 inline-block text-transparent bg-clip-text tracking-wider text-red-600 ">
          Gallery 2
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-24">
        <div
          className="flex flex-col group cursor-pointer"
          onClick={() =>
            setIsOpen({
              opened: true,
              src: Img1,
            })
          }
        >
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
              className="object-cover object-left lg:object-center "
              src={Img1}
              alt={"pic 1"}
              fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
              <div>
                <p className="font-bold">{"pic 1"}</p>
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
        <div className="flex flex-col group cursor-pointer" onClick={() =>
            setIsOpen({
              opened: true,
              src: Img3,
            })
          }>
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
              className="object-cover object-left lg:object-center "
              src={Img3}
              alt={"pic 2"}
              fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
              <div>
                <p className="font-bold">{"pic 2"}</p>
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
        <div className="flex flex-col group cursor-pointer" onClick={() =>
            setIsOpen({
              opened: true,
              src: Img2,
            })
          }>
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
              className="object-cover object-left lg:object-center "
              src={Img2}
              alt={"pic 3"}
              fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
              <div>
                <p className="font-bold">{"pic 3"}</p>
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
        <div className="flex flex-col group cursor-pointer" onClick={() =>
            setIsOpen({
              opened: true,
              src: Img3,
            })
          }>
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
              className="object-cover object-left lg:object-center "
              src={Img3}
              alt={"pic 4"}
              fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
              <div>
                <p className="font-bold">{"pic 4"}</p>
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
      </div>

      <div
        className={cn("fixed top-0 left-0 bg-black/90 h-full w-full z-50", {
          block: isOpen.opened,
          hidden: !isOpen.opened,
        })}
      >
        <span
          className="absolute top-0 right-[10px] text-6xl font-light text-white cursor-pointer z-[100]"
          onClick={() =>
            setIsOpen({
              opened: false,
              src: Img1,
            })
          }
        >
          x
        </span>
        <Image
          src={isOpen.src}
          alt="image"
          className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[750px] object-cover"
        />
      </div>
    </div>
  );
}
