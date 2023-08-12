'use client'
import { ArrowUp } from "lucide-react";

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTopButton() {
    return (
        <button className="bg-gray-700 rounded-md fixed top-[90%] left-[84%] sm:left-[94%] p-2 hover:bg-gray-400 duration-200" onClick={scrollToTop}>
            <ArrowUp size={40} color="white"/>
        </button>
    );
}