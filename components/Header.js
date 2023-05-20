"use client";
import Image from "next/image";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="relative xl:static justify-between px-6 md:px-20 py-2 items-center flex shadow-md">
        <Image
          src="/logo.png"
          width={130}
          height={130}
          alt="logo"
          className="self-end"
        />
        <ul className={!isOpen ? "navs-hide" : "navs-show"}>
          <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
            about us
          </li>
          <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
            programs
          </li>
          <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
            events
          </li>
          <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
            get involved
          </li>
          <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
            news & media
          </li>
          <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
            contact
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-w-10 xl:hidden hover:text-red-500 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </main>
  );
}
