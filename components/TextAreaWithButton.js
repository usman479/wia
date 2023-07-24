"use client";
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
import { useUser } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
export function TextareaWithButton({ _id }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const pathName = usePathname()

  const onSubmit = async (e) => {
    e.preventDefault();
    e.target.comment.value;
    user.fullName;
    user.imageUrl;
    user.emailAddresses;
    const res = await client.create(
      {
        _type: "comment",
        name: user.fullName,
        text: e.target.comment.value,
        mail: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,
        post: {
          _type: "reference",
          _ref: _id,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_COMMENTERS_TOKEN}`,
        },
      }
    );
    console.log(res);
    e.target.comment.value = "";
    router.refresh();
  };

  return (
    <>
      <SignedIn>
        <form
          className="flex items-start flex-col gap-y-4 my-2"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="w-full">
            <label
              for="message"
              class="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Write a comment
            </label>
            <textarea
              id="message"
              rows="4"
              name="comment"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:scale-105 duration-100">
            Submit
          </button>
        </form>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" redirectUrl={pathName}>
          <div className="flex justify-center my-2">
            <button className="bg-red-500 text-white px-6 py-2 hover:scale-105 duration-100">Sign In To Comment</button>
          </div>
        </SignInButton>
      </SignedOut>
    </>
  );
}
