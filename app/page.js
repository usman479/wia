import Corousel from "@/components/corousel";
import Image from "next/image";
import UpTheLadder from "@/public/upTheLadder-2.png";
export default function Home() {
  return (
    <>
      <Corousel />
      <section className="bg-[url('.././public/texture.jpg')] text-center md:text-left bg-blend-color-dodge bg-white/50 bg-repeat bg-center flex flex-col md:flex-row items-center gap-y-6 gap-x-24 pt-8 md:pt-0 px-6 md:px-20 my-12 justify-center">
       
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">WIA MENTORSHIP PROGRAM</h2>
          <h3 className="text-3xl font-semibold">Empowering Animation Professionals</h3>
          <p className="font-medium">
            Be a part of the WIA Mentorship program as either a mentor or
            mentee, and support WIA members in reaching the next steps in their
            careers.
          </p>
        </div>
        <Image src={UpTheLadder} className="w-[80%] h-[80%]  md:w-[50%] md:h-[50%] align-bottom"/>
        
      </section>
    </>
  );
}
