import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import CommentSection from "@/components/CommentSection";
import Comments from "@/components/Comments";
import Service from "@/components/Service";
import ReactPlayer from "react-player";


export const revalidate = 60; // revalidate this page every 60 seconds

async function getSubServices(slug) {
//   console.log('slug: ', slug)
  const res =
    await client.fetch(`*[_type == 'subService' && serviceOf._ref == '${slug}'] | order(_createdAt desc)`, {
      next: { revalidate: 60 },
    });
//   console.log('response: ', res)
  return res;
}


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const services = await client.fetch(`*[_type == 'service']`, {
    next: { revalidate: 60 },
  });
  // console.log('suiiii:', posts)
  // return null;
  const routes = services.map((service) => service._id);
  return routes.map((slug) => ({
    slug,
  }));
}

export default async function postPage({ params: { slug } }) {
  const subServices = await getSubServices(slug);
  return (
    <div className=" mb-12 mt-36 space-y-8 px-6 md:px-20">
      {subServices.map((subService,index) => {
        return <Service image={subService.image} videoUrl={subService.videoUrl} title={subService.title} description={subService.description} position={index} key={subService._id} id={null}/>
      })}
    </div>
  );
}
