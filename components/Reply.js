import React from "react";

export default function Reply({ image, name, mail, comment , _createdAt}) {
  return (
    <div className="mt-4 ml-12 ">
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
    </div>
  );
}
