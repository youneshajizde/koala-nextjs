import React from "react";
import Image from "next/image";
import notFoundImg from "@/images/notFound.png";
function NotFound() {
  return (
    <div className="flex flex-col sm:flex-row mx-auto items-center justify-center mt-6 md:mt-36">
      <Image src={notFoundImg} height={350} width={350} />

      <p className="font-semibold text-lg md:text-2xl text-cyan-500">
        Sorry Koala could not find it...
      </p>
    </div>
  );
}

export default NotFound;
