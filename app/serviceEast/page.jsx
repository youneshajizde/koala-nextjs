"use client";

import Product from "@/Components/Product";
// import serviceFetcher from "@/lib/serviceFetcher";
import React, { useState, useEffect } from "react";
// import useSWR from "swr";
import fetchData from "@/lib/fetchData";

function ServiceEast() {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(
        `/properties?populate=*&filters[category][id][$eq]=2`
      );
      setFiltered(data.data);
    })();
  }, []);
  const items = filtered.map((e, index) => (
    <Product
      title={e.attributes.state}
      rooms={e.attributes.rooms}
      rating={e.attributes.rating}
      img={
        process.env.NEXT_PUBLIC_STRAPI_URL +
        e?.attributes?.images?.data[0].attributes.url
      }
      id={e.id}
      key={index}
    ></Product>
  ));
  return (
    <main className="w-3/4 md:w-10/12 mx-auto mt-8 ">
      <div className="w-full gap-x-[4.8rem] mt-10 grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-y-11 ">
        {items}
      </div>
    </main>
  );
}

export default ServiceEast;
