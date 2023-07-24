import { client } from '@/sanity/lib/client'
import React from 'react'
import BlogList from '@/components/BlogList';

export const revalidate = 60 // revalidate this page every 60 seconds


async function getBlogs() {
    const res = await client.fetch(`*[_type == 'post'] | order(_createdAt desc)`);
    return res;
}


export default async function page() {
    const data = await getBlogs();
  return (
    <div>
        <BlogList posts={data} />
    </div>
  )
}
