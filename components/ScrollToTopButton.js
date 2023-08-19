"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTopButton() {
  //   const [show, setShow] = useState(false);
  //   useEffect(() => {
  //     if (window.screenY > 700) {
  //         console.log('here')
  //       setShow((prev) => true);
  //     } else {
  //       setShow((prev) => false);
  //       console.log('first')
  //     }
  //   }, [window.screenY]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <button
      className={cn(
        "bg-gray-700 rounded-md fixed top-[90%] left-[84%] sm:left-[94%] p-2 hover:bg-gray-400 duration-200",
        {
          'block':scrollY > 700,
          'hidden':scrollY < 701
        }
      )}
      onClick={scrollToTop}
    >
      <ArrowUp size={40} color="white" />
    </button>
  );
}
