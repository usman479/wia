"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  // const { isLoaded, isSignedIn, user } = useUser();
  // console.log(isLoaded, isSignedIn, user )
  return (
    <main className="fixed top-0 left-0 right-0 z-50 bg-white select-none w-full">
      <div className="relative xl:static justify-between px-6 md:px-20 py-2 items-center flex shadow-md h-28">
        <Link href="/">
          <Image
            src="/logo.png"
            width={130}
            height={130}
            alt="logo"
            className="self-end"
          />
        </Link>
        <ul className={!isOpen ? "navs-hide" : "navs-show"}>
          {/* <Link href={"/about-us"}>
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              about us
            </li>
          </Link> */}
          <Link href={"/service"}>
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              Services
            </li>
          </Link>
          <Link href={"/portfolio"}>
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              Portfolio
            </li>
          </Link>
          {/* <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
            get involved
          </li> */}
          <Link href={"/blogs"}>
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              blogs
            </li>
          </Link>
          <Link href="/contact">
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              contact
            </li>
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <li className="xl:hover-navbar rounded-md  hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
                Sign In
              </li>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              afterSignOutUrl={pathName}
              appearance={{
                elements: {
                  rootBox: "self-center py-4 xl:border-none xl:py-6 xl:px-4",
                  avatarBox: " w-10 h-10",
                  userButtonPopoverActionButton__manageAccount: "hidden",
                  userButtonPopoverFooter: "hidden",
                },
              }}
            />
          </SignedIn>
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
        {/* Mount the UserButton component */}
        {/* <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn">Sign In</button>
          </SignInButton>
        </SignedOut> */}
      </div>
    </main>
  );
}
