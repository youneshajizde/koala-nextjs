import React from "react";
import { Star } from "lucide-react";
import imgHome from "@/images/property4.jpg";
import Link from "next/link";
function Product({ title, rooms, rating, img, id }) {
  return (
    <Link href={`/details/${id}`}>
      <div className=" products ">
        <img className="w-90 h-48 rounded-xl object-cover w-screen" src={img} />
        <div className="px-2 py-3 w-80">
          <h2 className="font-semibold">{title}</h2>
          <p className="flex space-x-4 font-medium mt-2">
            <span>2 Beds</span>
            <span>{rooms} Rooms</span>
            <span className="flex">
              {rating} <Star className="w-[16px] text-yellow-500" />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
