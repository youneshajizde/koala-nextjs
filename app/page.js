// import banner from "@/images/banner.jpg";
"use client";
import { Button } from "@/Components/ui/button";
import ServiceBox from "@/Components/ServiceBox";
import serviceImg1 from "@/images/east.jpg";
import serviceImg2 from "@/images/west.jpg";
import ComboBx from "@/Components/ComboBx";
import aboutImg from "@/images/about.jpg";
import Image from "next/image";
import { PaginationDemo } from "@/Components/Pagination";
import Disclosures from "@/Components/Disclosures";
import Product from "@/Components/Product";
import Banner from "@/Components/Banner";
import { useEffect, useState } from "react";
import fetchData from "@/lib/fetchData";
import localdb from "@/localdb";
import MyListbox from "@/Components/MyListbox";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rooms, setRooms] = useState(false);
  const [metas, setMetas] = useState();

  useEffect(() => {
    (async () => {
      const data = await fetchData(
        `/properties?pagination[page]=${currentPage}&pagination[pageSize]=8&populate=*${
          rooms ? `&filters[rooms][$eq]=${rooms}` : ""
        }`
      );
      setProperties(data.data);
      setMetas(data.meta);
    })();
  }, [currentPage, rooms]);

  const elements = metas?.pagination?.pageCount;

  const items = properties?.map((e, index) => {
    return (
      <Product
        title={e.attributes.state}
        rooms={e.attributes.rooms}
        rating={e.attributes.rating}
        id={e.id}
        img={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          e?.attributes?.images?.data[0].attributes.url
        }
        key={index}
      ></Product>
    );
  });

  return (
    <>
      <Banner />
      <main className="w-3/4 md:w-10/12 mx-auto mt-8 ">
        <h1 className="text-2xl text-center font-bold md:text-2xl">
          Our Services
        </h1>

        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 mt-10">
          <ServiceBox
            img={serviceImg1}
            desc={localdb[1].desc}
            directTo={"/serviceEast"}
          />
          <ServiceBox
            img={serviceImg2}
            desc={localdb[0].desc}
            directTo={"/serviceWest"}
          />
        </div>

        <div className="flex flex-col mt-20 relative">
          <h2 className="font-bold text-xl">Find your next home</h2>
          <p className="font-medium text-gray-600">
            Search for different properties
          </p>

          <div className="flex flex-col sm:flex-row mt-3 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="sm:space-x-2 sm:space-y-0 space-y-3 flex flex-col sm:flex-row bg-slate-100 rounded-lg p-2">
              <ComboBx />
              
            </div>

            <div className="sm:space-x-2 sm:space-y-0 space-y-3 flex flex-col sm:flex-row bg-slate-100 rounded-lg p-2">
              <MyListbox
                rooms={rooms}
                setRooms={setRooms}
                setCurrenPage={setCurrentPage}
              />
            </div>
          </div>
          {/* <div className="absolute text-sm w-[210px]  left-0 top-[6.8rem] flex flex-col gap-3 py-2 px-2 bg-white rounded-md ">
            <div className="flex justify-between items-center">
              <div>
                <Image
                  className="rounded-lg"
                  width={32}
                  height={32}
                  alt=""
                  src={aboutImg}
                />
              </div>
              <div>
                <span>SunnyVale</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <Image
                  className="rounded-lg"
                  width={32}
                  height={32}
                  alt=""
                  src={aboutImg}
                />
              </div>
              <div>
                <span>SunnyVale</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <Image
                  className="rounded-lg"
                  width={32}
                  height={32}
                  alt=""
                  src={aboutImg}
                />
              </div>
              <div>
                <span>SunnyVale</span>
              </div>
            </div>
          </div> */}
        </div>

        <div className="w-full gap-x-[4.8rem] mt-10 grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-y-11 ">
          {items}
        </div>

        <PaginationDemo
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          elements={elements}
        />

        <div className="mt-14 w-full grid   sm:grid-cols-2 mx-auto">
          <div>
            <Disclosures />
          </div>
          <div className="w-full   hidden sm:grid mx-auto  justify-center items-center">
            <Image
              className="rounded-lg"
              src={aboutImg}
              height={300}
              width={300}
            />
          </div>
        </div>

        <div className="w-full mt-14 mx-auto text-center p-4 ">
          <h1 className="font-semibold text-3xl">Koala's immediate services</h1>
          <div className="text-center mx-7 sm:mx-20 mt-5">
            <p>
              We’re a diverse and passionate company that provides information
              on hotels and their details for you to have a comfy stay. We stay
              light on our feet and truly enjoy delivering great service.
            </p>
          </div>
          <div className="mt-5 flex flex-col lg:flex-row gap-7 justify-center items-center">
            <Button className="bg-slate-200 hover:bg-cyan-500 hover:text-white text-gray-700">
              Insights
            </Button>
            <Button className="bg-slate-200 hover:bg-cyan-500 hover:text-white text-gray-700">
              Contact
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
