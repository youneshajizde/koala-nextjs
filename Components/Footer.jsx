import React from "react";
import logo from "/images/koala-logo.svg";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import Image from "next/image";
function Footer() {
  return (
    <footer className="w-3/4 md:w-10/12 mx-auto mt-8">
      <div className="mt-16">
        <hr />
        <div className="flex flex-wrap justify-between items-center p-7">
          <div className="w-full  md:w-auto mb-3 md:mb-0 md:mr-6 ">
            <Image
              className="w-20 mx-auto"
              src={logo}
              height={0}
              width={0}
              sizes="100vw"
            />
          </div>
          <div className="w-full md:w-auto mb-3 md:mb-0 text-center md:text-left">
            All rights belong to Jonas elemented 2025
          </div>
          <div className="social-list text-cyan-700">
            <Instagram />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
