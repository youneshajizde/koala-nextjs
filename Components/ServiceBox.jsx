import React from "react";

import Image from "next/image";
import { Button } from "@/Components/ui/button";
import Link from "next/link";
function ServiceBox({ img, desc, directTo }) {
  return (
    <>
      <div className="w-full md:w-3/5 rounded-md relative">
        <Image
          className="rounded-md"
          src={img}
          alt=""
          objectFit="cover"
          layout="fill"
        />

        <div className="service-box"></div>
        <div className="flex flex-col py-5 px-5 z-40 gap-5 md:gap-10 relative inset-0 h-full ">
          <p className=" text-white text-sm md:text-md lg:text-xl relative">
            {desc}
          </p>

          <div className="justify-end">
            <Link href={directTo}>
              <Button className="outline-gray-100 border-2 border-gray-100 bg-transparent hover:bg-gray-100 hover:text-black">
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceBox;
