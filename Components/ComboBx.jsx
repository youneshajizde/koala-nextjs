import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import aboutImg from "@/images/about.jpg";
import Image from "next/image";
import fetchData from "@/lib/fetchData";
import Link from "next/link";

function ComboBx() {
  const [productList, setProductList] = useState([]);
  const [open, setIsOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData(`/properties?&populate=*`);
      setProductList(data.data);
    })();
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm) {
      setIsOpen(true);
      const filtered = productList.filter((item) =>
        item.attributes.state
          .split(" - ")[0]
          .toLowerCase()
          .startsWith(searchTerm)
      );
      setFilteredCities(
        filtered.map((item) => ({
          id: item.id,
          city: item.attributes.state.split(" - ")[0],
          imageUrl:
            item.attributes.images.length > 0
              ? item.attributes?.images?.data?.attributes.url
              : null,
        }))
      );
    } else {
      setIsOpen(false);
      setFilteredCities([]);
    }
  };

  console.log(filteredCities);

  return (
    <div>
      <input
        placeholder="what city or state..."
        type="text"
        className="bg-transparent text-sm "
        onChange={handleInputChange}
      />
      <div
        className={`${
          open ? "absolute transition-all duration-3000 ease-in" : "hidden"
        } text-sm w-full sm:w-[210px]  left-0 top-[6.8rem] flex flex-col gap-3 py-2 px-2 cities bg-white rounded-md `}
      >
        {filteredCities.map((cityData, index) => {
          console.log(cityData);
          return (
            <Link href={`/details/${cityData.id}`} key={index}>
              <div className="flex justify-between items-center">
                <div>
                  {cityData.imageUrl ? (
                    <img
                      className="rounded-lg w-6 h-6"
                      alt=""
                      src={cityData.imageUrl}
                    />
                  ) : (
                    <div className="rounded-lg w-6 h-6 bg-gray-200" />
                  )}
                </div>
                <div>
                  <span>{cityData.city}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ComboBx;
