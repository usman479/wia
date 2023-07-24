import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import CommentSection from "@/components/CommentSection";
import Comments from "@/components/Comments";


export const revalidate = 60; // revalidate this page every 60 seconds

async function getPost(slug) {
  console.log('slug: ', slug)
  const res =
    await client.fetch(`*[_type == 'post' && slug.current == '${slug}'][0]{
      ...,
      author->,
      "comments": *[_type == 'comment' && post._ref == ^._id] | order(_createdAt desc){
        name,
        text,
        mail,
        image,
          reply,
        _id,
        _createdAt,
        'isReply': (comments.reply )   ,
        "replies": *[_type == 'comment' && reply._ref == ^._id] | order(_createdAt desc) {
          name,
        text,
        mail,
        image,
        _id,
        _createdAt,
           
        }
      }
  }`);
  console.log('response: ', res)
  return res;
}
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == 'post']`, {
    next: { revalidate: 60 },
  });
  // console.log('suiiii:', posts)
  // return null;
  const routes = posts.map((post) => post.slug.current);
  return routes.map((slug) => ({
    slug,
  }));
}

export default async function postPage({ params: { slug } }) {
  const post = await getPost(slug);
  // console.log(post)
  // const comments = await getComments();
  // return <p>{JSON.stringify(post)}</p>
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
      <hr />
        <CommentSection _id={post._id}/>
      <hr/>
      <h3 className="text-3xl font-bold">Comments</h3>
      {post.comments.map((comment) => (
        comment.reply ? null :
        <Comments
          key={comment._id}
          name={comment.name}
          image={comment.image}
          mail={comment.mail}
          commentId={comment._id}
          postId={post._id}
          comment={comment.text}
          replies = {comment.replies}
          _createdAt = {comment._createdAt}
        />
      ))}
      {/* <Comments/>
      <Comments/>
      <Comments/> */}
    </article>
  );
}
