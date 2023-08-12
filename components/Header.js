"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, Home, LogIn } from "lucide-react";
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
      <div className="relative xl:static justify-between px-6 md:px-20 py-2 items-baseline xl:items-center flex shadow-md h-28">
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
          <Link href={"/#top"}>
            <li className="xl:hover-navbar rounded-md hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>

              {/* <Home /> */}
              {/* home */}
            </li>
          </Link>
          <Link href={"/#about-us"}>
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              about
            </li>
          </Link>
          <Link href={"/service#top"}>
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              Services
            </li>
          </Link>
          <Link href={"/portfolio#top"}>
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              Portfolio
            </li>
          </Link>
          {/* <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
            get involved
          </li> */}
          <Link href={"/blogs#top"}>
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              blogs
            </li>
          </Link>
          <Link href="/contact#top">
            <li className="xl:hover-navbar hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
              contact
            </li>
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <li className="xl:hover-navbar rounded-md  hover:text-red-500 cursor-pointer py-4 border-b xl:border-none xl:py-6 xl:px-4">
                {/* Sign In */}
                <LogIn />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg> */}
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
