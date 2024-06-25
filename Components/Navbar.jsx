"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { BellRing, Menu, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "/images/koala-logo.svg";
import useCartStore from "@/store/cart-store";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const [vibrate, setVibrate] = useState(false);
  useEffect(() => {
    if (vibrate) {
      gsap.to(".bell-ring", {
        duration: 1,
        x: 7,
        yoyo: true,
        repeat: 4,
        ease: "power2.inOut",
      });
      setVibrate(false); // reset vibration state
    }
  }, [vibrate]);

  return (
    <nav className="navbar">
      <ul className="list-links">
        <li>
          <Link href={"/"}>
            <Image
              src={logo}
              width={5}
              height={5}
              className="hidden md:flex w-16"
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/contact"}>Exclusives</Link>
        </li>
      </ul>

      <Menu
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-cyan-400 cursor-pointer"
      />

      <Image
        src={logo}
        width={200}
        height={200}
        className="w-[80px] md:hidden"
      />
      <div className="flex items-center gap-7">
        {cart.length > 0 && (
          <Link href={"/table"}>
            <BellRing
              className={`text-cyan-600 ${vibrate ? "animate-vibrate" : ""}`}
              onClick={() => setVibrate(true)} // trigger vibration on click
            />
            <span className="absolute  text-sm bg-red-600 top-7 right-[16.5rem] text-white p-1 rounded-full">
              {cart.length}
            </span>
          </Link>
        )}

        <Link href={"/login"}>
          <Button className="bg-cyan-500 rounded-md p-2 text-white font-medium text-sm hover:bg-cyan-400">
            Log/Register
          </Button>
        </Link>
      </div>

      <div
        className={`${
          isOpen
            ? "absolute bg-white top-20 left-3 w-40 h-48 p-2 md:hidden"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/contact"}>Exclusives</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
