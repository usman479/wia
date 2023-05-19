"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-[#282828] text-white flex justify-between flex-wrap lg:flex-nowrap py-10 px-6 md:px-20">
        <div className="mb-6">
          <h2 className="relative text-xl after:content-[''] after:absolute after:bottom-5 after:left-[18%] after:w-20 after:h-[0.2rem] after:bg-red-700 after:-translate-x-2/4 pt-6 pb-8">
            Conatct WIA
          </h2>
          <div className="mb-1 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a
              href="mailto: wia@womeninanimation.org"
              className="cursor-pointer pl-3 hover:text-red-700 duration-300"
            >
              wia@womeninanimation.org
            </a>
          </div>

          <div className="mb-16 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
            <a
              href="/www.womeninanimation.org"
              className="cursor-pointer pl-3 hover:text-red-700 duration-300"
            >
              www.womeninanimation.org
            </a>
          </div>

          <p className="text-[#6b6b6b] text-sm">
            WIA is a 501(c)(3)
            <br /> non-profit organization.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="relative text-xl after:content-[''] after:absolute after:bottom-5 after:left-[14%] after:w-20 after:h-[0.2rem] after:bg-red-700 after:-translate-x-2/4 pt-6 pb-8">
            Follow WIA
          </h2>
          <div className="flex mb-8">
            <div class="p-2 mr-2 rounded-full border-2 border-white hover:bg-[#00acee] duration-200">
              <a href="https://twitter.com/wia_animation" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="text-white h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
            </div>
            <div class="p-2 mx-2 rounded-full border-2 border-white hover:bg-[#3b5998] duration-200">
              <a href="https://www.facebook.com/wia.animation" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  className="text-white h-4 w-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </div>
            <div class="p-2 mx-2 rounded-full border-2 border-white hover:bg-[#0072b1] duration-200">
              <a href="https://www.linkedin.com/groups/158636/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin text-white h-4 w-4"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>{" "}
                </svg>
              </a>
            </div>
            <div class="p-2 mx-2 rounded-full border-2 border-white hover:bg-[#d62976] duration-200">
              <a href="https://www.instagram.com/wia.animation/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram text-white h-4 w-4"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{" "}
                </svg>
              </a>
            </div>
          </div>
          <h2 className="relative text-xl after:content-[''] after:absolute after:bottom-5 after:left-[14%] after:w-20 after:h-[0.2rem] after:bg-red-700 after:-translate-x-2/4 pt-6 pb-8">
            Join Our Mailing List
          </h2>
          <p className="text-[#6b6b6b] my-4 text-sm">
            Click the link below to signup for our <br />
            mailing list and receive emails about <br />
            news, events, special offers and more.
          </p>
          <button className="bg-red-700 p-3 font-semibold">
            SUBSCRIBE TO LIST
          </button>
        </div>

        <div className="mb-6">
          <h2 className="relative text-xl after:content-[''] after:absolute after:bottom-5 after:left-[12%] after:w-20 after:h-[0.2rem] after:bg-red-700 after:-translate-x-2/4 pt-6 pb-8">
            Latest News
          </h2>
          <ul>
            <li className="border-b-[1px] border-gray-400 py-3 text-sm">
              <a
                src="/"
                className="cursor-pointer hover:text-red-700 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 pb-1 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                An Interview With Sandra Equihua, <br /> 2023 WIA World Summit
                Artist
              </a>
              <p className="pl-4 text-[#6b6b6b]">May 16, 2023</p>
            </li>
            <li className="border-b-[1px] border-gray-400 py-3 text-sm">
              <a
                src="/"
                className="cursor-pointer hover:text-red-700 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 pb-1 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                WIA and FIAPF Announce the <br /> Stories x Women Delegates
              </a>
              <p className="pl-4 text-[#6b6b6b]">May 12, 2023</p>
            </li>
            <li className="border-b-[1px] border-gray-400 py-3 text-sm">
              <a
                src="/"
                className="cursor-pointer hover:text-red-700 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 pb-1 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                Marge Dean And Camille Eden Featured In <br /> Emmy Magazine
              </a>
              <p className="pl-4 text-[#6b6b6b]">April 27, 2023</p>
            </li>
            <li className="border-b-[1px] border-gray-400 py-3 text-sm">
              <a
                src="/"
                className="cursor-pointer hover:text-red-700 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 pb-1 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                Help Us Build Connections
              </a>
              <p className="pl-4 text-[#6b6b6b]">April 19, 2023</p>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="relative text-xl after:content-[''] after:absolute after:bottom-5 after:left-[15%] after:w-20 after:h-[0.2rem] after:bg-red-700 after:-translate-x-2/4 pt-6 pb-8">
            Support WIA While You <br /> Shop
          </h2>
          <Image
            src="/amazonSmile.jpg"
            width={200}
            height={200}
            alt="logo"
            className="my-4"
          />
          <Image
            src="/givingAssistant.jpg"
            width={200}
            height={200}
            alt="logo"
            className="my-4"
          />
          <p className="text-[#6b6b6b] text-sm">
            Do your online shopping through <br /> Amazon Smile or Giving
            Assistant, <br />
            and a percentage of your <br /> purchase total will be donated to{" "}
            <br /> support WIA!
          </p>
        </div>
      </div>
      <div className="py-6 bg-[#2f2f2f] text-sm text-white text-center">
        <p className="cursor-pointer hover:text-red-700 duration-300">
          <span className="text-white cursor-pointer hover:text-red-700 duration-300">
            Privacy
          </span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-white cursor-pointer hover:text-red-700 duration-300">
            Terms Of Use
          </span>
        </p>
        <p className="text-[#6b6b6b]">
          Copyright &copy; 2023{" "}
          <span className="text-white cursor-pointer hover:text-red-700 duration-300">
            WIA
          </span>
          . All rights reserved.
        </p>
      </div>
    </>
  );
}
