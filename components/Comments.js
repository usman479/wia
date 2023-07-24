"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { SignedIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import Reply from "./Reply";

export default function Comments({
  image,
  name,
  mail,
  comment,
  commentId,
  postId,
  replies,
  _createdAt,
}) {
  const { user } = useUser();
  const [replyOpened, setReplyOpened] = useState(false);
  const router = useRouter();
  //   const replyRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await client.create(
      {
        _type: "comment",
        name: user.fullName,
        text: e.target.reply.value,
        mail: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
        post: {
          _type: "reference",
          _ref: postId,
        },
        reply: {
          _type: "reference",
          _ref: commentId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_COMMENTERS_TOKEN}`,
        },
      }
    );

    e.target.reply.value = "";
    router.refresh();
  };

  const cancelHandler = () => {
    // replyRef.current.reply.value = "";
    setReplyOpened(false);
  };

  return (
    <div className="mt-4">
      <div className="flex justify-between flex-col  sm:flex-row ml-[3.4rem] sm:ml-0">
        <div className="flex">
          <img class="w-10 h-10 rounded" src={image} alt="Default avatar"></img>
          <div className="flex flex-col ml-4">
            <p className="text-lg font-semibold leading-none">{name}</p>
            <p className="italic text-sm leading-none  text-gray-600">{mail}</p>
          </div>
        </div>
        <p className="text-xs text-gray-600">{new Date(_createdAt).toLocaleDateString("en-US",{
          day:"numeric",
          year:'numeric',
          month:'long',
        }) + ' at '+ new Date(_createdAt).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</p> 
      </div>
      <p className=" ml-[3.3rem] mt-2 sm:mt-0">{comment}</p>
      <SignedIn>
        <div
          className="flex ml-[3.3rem] items-baseline cursor-pointer"
          onClick={(e) => setReplyOpened((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 font-bold text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-600 text-sm ml-1">Reply</p>
        </div>
      </SignedIn>

      <SignedIn>
        {replyOpened && (
          <div className="flex ml-12 mt-4">
            <img
              class="w-10 h-10 rounded"
              src={user?.imageUrl || null}
              alt="Default avatar"
            />
            <form
              onSubmit={(e) => submitHandler(e)}
              className="flex flex-grow flex-wrap gap-y-2"
            >
              <input
                type="text"
                name="reply"
                className="border-x-0 border-t-0 border-b-[1px]  focus:ring-0 focus:border-b-[1px] focus:border-black border-gray-400  ml-4 flex-grow"
                placeholder="Type your reply here"
              />
              <div>
                <button
                  className="bg-gray-500 text-white rounded-md px-4 py-1 mx-2"
                  onClick={cancelHandler}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md px-4 py-1 mx-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </SignedIn>
      {replies.map((reply) => (
        <Reply
          key={reply._id}
          image={reply.image}
          name={reply.name}
          mail={reply.mail}
          comment={reply.text}
          _createdAt={reply._createdAt}
        />
      ))}
    </div>
  );
}
