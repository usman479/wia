"use client";
import Swal from "sweetalert2";
import { useForm } from "@formspree/react";
import { Resend } from "resend";
// import { useRouter } from "next/navigation";

// const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

// function scrollToTop() {
//   if (!isBrowser()) return;
//   window.scrollTo({ top: 0, behavior: "smooth" });

// }

const resend = new Resend('re_CnRR2Ec6_74YxYHCwnFoLopej7p49v1Xj');

export default function ContactForm() {
  const [state, handleSubmit] = useForm("myyqekvq"); // mqkvpewv mine
  // const router = useRouter();

  if (state.succeeded) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thanks for contacting us!",
      showConfirmButton: false,
      timer: 3000,
    });

  
    // if (isBrowser()) {
    //   window.onbeforeunload = () => {
    //     for (const form of document.getElementsByTagName("form")) {
    //       form.reset();
    //     }
    //   };
    // }
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'muusman479@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
    console.log('done')
  }

  return (
    <>
      <div className="flex justify-between flex-col xl:flex-row my-10 py-10 px-6 md:px-20 h-max">
        <div className="CHILD-1 flex-1 mr-0 xl:mr-10">
          <h2 className="text-3xl mb-6 font-semibold leading-snug tracking-wider">
            Contact Form
          </h2>
          <form
            onSubmit={(e) => onHandleSubmit(e)}
            className="flex flex-col"
          >
            {/* <div className="mb-6 shadow-xl"> */}
            <div className="flex gap-x-4 flex-col sm:flex-row">
              <input
                type="text"
                className=" border border-slate-300 rounded-md px-3 py-2 w-full mb-6 shadow-md"
                placeholder="Name"
                name="Name"
                required
              />
              {/* </div> */}
              {/* <div className="mb-6 shadow-xl"> */}
              <input
                type="email"
                className=" border border-slate-300 rounded-md px-3 py-2 w-full mb-6 shadow-md"
                placeholder="Email"
                name="Email"
                required
              />
            </div>
            {/* </div> */}
            {/* <div className="mb-6 shadow-xl"> */}
            <div className="flex gap-x-4 flex-col sm:flex-row">
              <input
                type="tel"
                className="border border-slate-300 rounded-md px-3 py-2 w-full mb-6 shadow-md"
                // pattern="[0-9]{4}-[0-9]{7}"
                placeholder="Phone no."
                name="Phone_No"
                required
              />
              {/* </div> */}
              {/* <div className="mb-6 shadow-xl"> */}
              <input
                type="text"
                className="border border-slate-300 rounded-md px-3 py-2 w-full mb-6 shadow-md"
                placeholder="Address"
                name="Address"
                
              />
            </div>
            {/* </div> */}
            {/* <div className="mb-6"> */}
            <textarea
              className="border border-slate-300 rounded-md px-3 py-2 w-full shadow-md mb-6"
              cols={30}
              rows={3}
              placeholder="Message"
              minLength={5}
              name="Message"
              required
            ></textarea>
            {/* </div> */}
            <div>
              <button
                className="flex items-center group text-white font-semibold bg-red-600 hover:bg-transparent hover:text-red-600 duration-300 border-2 border-red-600 text-lg md:text-xl rounded-md px-6 py-1 md:px-6 md:py-2"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="CHILD-2-MAP flex-1 mt-10 xl:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14965.596074763389!2d85.80699244636031!3d20.325128298459642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909070cb7bc8d%3A0x754c83f93687689a!2sChandrasekharpur%2C%20Bhubaneswar%2C%20Odisha%20751016%2C%20India!5e0!3m2!1sen!2s!4v1684522147069!5m2!1sen!2s"
            // width="600"
            // height="545"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="border-2 rounded-md shadow-xl min-h-[300px] w-full h-full"
          ></iframe>
        </div>
      </div>
    </>
  );
}
