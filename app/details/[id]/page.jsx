"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/Components/ui/button";
import { LatLng } from "leaflet";
import getProductById from "@/lib/getProductById";
import useCartStore from "@/store/cart-store";

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
  crossorigin="gfdfg"
/>;
<script
  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
  crossorigin=""
></script>;

function Details({ params }) {
  const [details, setDetails] = useState();
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  useEffect(() => {
    (async () => {
      const data = await getProductById(params?.id);

      setDetails(data.data);
    })();
  }, []);
  const latitude = parseFloat(details?.attributes?.coordination?.latitude);
  const longitude = parseFloat(details?.attributes?.coordination?.longitude);

  const centerPosition = new LatLng(latitude || 0, longitude || 0);

  const handleReserve = () => {
    const product = {
      id: params?.id,
      name: details?.attributes?.state,
      price: details?.attributes?.price,
    };
    addToCart(product);
  };
  return (
    <div className="w-full md:w-11/12 relative mx-auto space-y-10  ">
      <div className="reserve-mother">
        <div className="left-reserve">
          <div className="w-full sm:w-full lg:w-2/4 h-[250px] ">
            <img
              className="object-cover w-full rounded-md h-[250px]"
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                details?.attributes?.images?.data[0].attributes.url
              }
            />
          </div>

          <div className="flex flex-col w-full h-[250px] sm:w-full lg:w-2/4 justify-between ">
            <div className="">
              <h1 className="text-xl font-semibold mb-4">
                {details?.attributes?.state}
              </h1>
            </div>

            <div>
              <p className="mb-2">Beds: 2</p>
              <p className="mb-2">Rooms: {details?.attributes?.rooms}</p>
              <p className="mb-4 ">{details?.attributes?.description}</p>
            </div>

            <div className="flex justify-between items-center relative  mb-0">
              <h6 className="font-bold text-xl">
                {details?.attributes?.price}$
              </h6>
              <button
                onClick={handleReserve}
                disabled={cart.length >= 3 ? true : false}
                className={` text-white rounded-md p-2 ${
                  cart.length >= 3
                    ? "bg-gray-300"
                    : "bg-cyan-500 hover:bg-cyan-400"
                }`}
              >
                {cart.length >= 3 ? "Cant add more" : "Reserve"}
              </button>
            </div>
          </div>
        </div>
        <div className="map-container ">
          <div className=" leaflet-container rounded-lg">
            <MapContainer
              center={centerPosition}
              zoom={13}
              scrollWheelZoom={false}
              className="z-10 "
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="flex text-sm p-1  md:space-x-2 sm:p-3 ">
        <span className="options">Air conditioner</span>
        <span className="options">Garage</span>
        <span className="options">Grilling</span>
        <span className="options">Rooftop</span>
      </div>

      <div className="w-full h-full p-3 sm:p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" h-48 md:col-span-1 rounded-lg relative overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-md"
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                details?.attributes?.images?.data[1].attributes.url
              }
              height={0}
              width={0}
              sizes="100vw"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className=" h-48 md:col-span-2 rounded-lg relative overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-md"
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                details?.attributes?.images?.data[2].attributes.url
              }
              height={0}
              width={0}
              sizes="100vw"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className=" h-48 md:col-span-2 rounded-lg relative overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-md"
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                details?.attributes?.images?.data[3].attributes.url
              }
              height={0}
              width={0}
              sizes="100vw"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className=" h-48 md:col-span-1 rounded-lg relative overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-md"
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                details?.attributes?.images?.data[4]?.attributes.url
              }
              height={0}
              width={0}
              sizes="100vw"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
