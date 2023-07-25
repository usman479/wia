import React from "react";
import Image from "next/image";
import Img1 from "/public/img-1.jpeg";

export default function servicePage() {
  return (
    <div className=" mb-12 mt-36 space-y-8 px-6 md:px-20">
      <div className="grid md:grid-cols-2  gap-y-6    gap-x-12 items-center">
        <div className="space-y-6 text-center md:text-left md:order-2">
          <h2 className="text-4xl font-bold">WIA MENTORSHIP PROGRAM</h2>
          <p className="font-medium">
            Join the 5,500+ WIA members around the globe who are committed to
            WIA's mission of empowering and advocating for women and gender
            non-conforming people in animation, VFX, and gaming.
          </p>
        </div>
        <Image src={Img1} className="md:order-1" />
      </div>
      <hr className=""></hr>
      <div className="grid md:grid-cols-2 gap-y-6    gap-x-12 items-center">
        <div className="space-y-6 md:order-1 text-center md:text-left">
          <h2 className="text-4xl font-bold">WIA MENTORSHIP PROGRAM</h2>
          <p className="font-medium">
            Join the 5,500+ WIA members around the globe who are committed to
            WIA's mission of empowering and advocating for women and gender
            non-conforming people in animation, VFX, and gaming.
          </p>
        </div>
        <Image src={Img1} className="md:order-2" />
      </div>
      <hr className=""></hr>
      <div className="grid md:grid-cols-2  gap-y-6    gap-x-12 items-center">
        <div className="space-y-6 text-center md:text-left md:order-2">
          <h2 className="text-4xl font-bold">WIA MENTORSHIP PROGRAM</h2>
          <p className="font-medium">
            Join the 5,500+ WIA members around the globe who are committed to
            WIA's mission of empowering and advocating for women and gender
            non-conforming people in animation, VFX, and gaming.
          </p>
        </div>
        <Image src={Img1} className="md:order-1" />
      </div>
    </div>
  );
}
