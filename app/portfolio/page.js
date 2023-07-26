import React from "react";
import Img1 from "/public/img-1.jpeg";
import Img2 from "/public/img-2.jpeg";
import Image from "next/image";
import ClientSideRoute from "@/components/ClientSideRoute";

export default function portfolioPage() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-center my-4 bg-gradient-to-r from-red-600 to-gray-600 inline-block text-transparent bg-clip-text tracking-wider text-red-600 ">
          PORTFOLIO
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        <ClientSideRoute route={`/portfolio/gallery1`}>
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center "
                src={Img1}
                alt={"Gallery 1"}
                fill
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-bold">{"Gallery 1"}</p>
                </div>
              </div>
            </div>

            <p className="mt-5 font-bold flex items-center group-hover:underline">
              Open
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
        </ClientSideRoute>
        <ClientSideRoute route={`/portfolio/gallery2`}>
        <div className="flex flex-col group cursor-pointer">
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
              className="object-cover object-left lg:object-center "
              src={Img2}
              alt={"Gallery 2"}
              fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
              <div>
                <p className="font-bold">{"Gallery 2"}</p>
              </div>
            </div>
          </div>

          <p className="mt-5 font-bold flex items-center group-hover:underline">
            Open
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
        </ClientSideRoute>
      </div>
    </div>
  );
}
