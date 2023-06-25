import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-96 -m-8 sm:m-8 mx-auto">
          <Image
            className="object-contain"
            src={urlForImage(value).url()}
            alt="Blog post Image"
            fill
          />
        </div>
      );
    },
  },
  list:{
    bullet:({children}) => {
        return  <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    },
    number:({children}) => {
        return  <ol className="mt-lg list-decimal">{children}</ol>
    }
  },
  block:{
    h1:({children}) => {
       return <h1 className="text-5xl py-4 md:py-10 font-bold">{children}</h1>
    },
    h2:({children}) => {
        return  <h1 className="text-4xl py-4 md:py-10 font-bold">{children}</h1>
    },
    h3:({children}) => {
        return  <h1 className="text-3xl py-4 md:py-10 font-bold">{children}</h1>
    },
    h4:({children}) => {
        return <h1 className="text-2xl py-4 md:py-10 font-bold">{children}</h1>
    },
    blockquote:({children}) => {
        return <blockquote className="border-l-red-600 border-l-4 pl-5 py-5 md:my-5" >{children}</blockquote>
    }
  },
  marks:{
    link:({children,value}) => {
        const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
        return (
            <Link href={value.href} rel={rel} className="underline decoration-red-600 hover:decoration-black">
                {children}
            </Link>
        )
    }
  }
};
