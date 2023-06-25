import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

// export const revalidate = 30 // revalidate this page every 60 seconds


async function getPost(slug) {
  const res =
    await client.fetch(`*[_type == 'post' && slug.current == '${slug}'][0]{
        ...,
        author->
    }`);

  return res;
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const posts = await client.fetch(`*[_type == 'post']`,{next:{revalidate:60}});
//     // console.log('suiiii:', posts)
//     // return null;
//   const routes = posts.map((post) => post.slug.current);
//   return routes.map(slug => ({
//     slug
//   }))
// }

export default async function postPage({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <article className="px-10 pb-28 mt-36">
      <section className="space-y-2 border border-red-600 text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-20 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(post.mainImage).url()}
              alt="main image"
              fill
            />
          </div>
          <section className="p-5 bg-red-600 w-full min-h-[12rem]">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10 line-clamp-2">{post.description}</h2>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}
