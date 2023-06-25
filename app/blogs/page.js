import { client } from '@/sanity/lib/client'
import React from 'react'
import BlogList from '@/components/BlogList';


async function getBlogs() {
    const res = await client.fetch(`*[_type == 'post']`);
    return res;
}


export default async function page() {
    const data = await getBlogs();
    console.log(data);
  return (
    <div>
        <BlogList posts={data} />
    </div>
  )
}
