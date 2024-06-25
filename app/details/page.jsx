// "use client";

// import React, { useEffect, useState } from "react";
// import imgCard from "@/images/property4.jpg";
// import Image from "next/image";
// import { MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { Button } from "@/Components/ui/button";
// import galleryImg from "@/images/lower1.jpg";
// import galleryImg1 from "@/images/lower2.jpg";
// import galleryImg2 from "@/images/lower3.jpg";
// import galleryImg3 from "@/images/lower4.jpg";
// import getProductById from "@/lib/getProductById";

// <link
//   rel="stylesheet"
//   href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
//   integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
//   crossorigin=""
// />;
// <script
//   src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
//   integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
//   crossorigin=""
// ></script>;

// function Details() {
//   const [details, setDetails] = useState();

//   useEffect(() => {
//     (async () => {
//       const data = await getProductById(5);

//       setDetails(data.data);
//     })();
//   }, []);

//   console.log(details);
//   return (
//     <div className="w-full md:w-11/12 relative mx-auto space-y-10 ">
//       <div className="reserve-mother ">
//         <div className="left-reserve">
//           <div className="w-full sm:w-full lg:w-2/4 h-[250px]">
//             <Image
//               className="object-cover w-full h-full rounded-md"
//               src={imgCard}
//               width={0}
//               height={0}
//               sizes="100vw"
//             />
//           </div>

//           <div className="w-full h-full sm:w-full lg:w-2/4 ">
//             <h1 className="text-xl font-semibold mb-4">Deplux Texan Style</h1>

//             <p className="mb-2">Beds: 2</p>
//             <p className="mb-2">Rooms: 1</p>

//             <p className="mb-4 ">
//               Description: Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. Illo, id. Lorem ipsum dolor sit amet, consectetur
//               adipisicing elit. Nobis, nihil repellat.
//             </p>

//             <div className="flex justify-between items-center">
//               <h6 className="font-bold text-xl">236$</h6>
//               <Button className="bg-cyan-500 text-white">Reserve</Button>
//             </div>
//           </div>
//         </div>

//         <div className="map-container">
//           <div className=" leaflet-container rounded-lg">
//             <MapContainer
//               center={[40.7127753, -74.0059728]}
//               zoom={13}
//               scrollWheelZoom={false}
//               className="z-10 "
//             >
//               <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//             </MapContainer>
//           </div>
//         </div>
//       </div>
//       <div className="flex space-x-5 p-3 sm:p-0">
//         <span className="options">lorem</span>
//         <span className="options">lorem</span>
//         <span className="options">lorem</span>
//         <span className="options">lorem</span>
//       </div>

//       <div className="w-full h-full p-3 sm:p-0">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className=" h-48 md:col-span-1 rounded-lg relative overflow-hidden">
//             <Image
//               src={galleryImg}
//               height={0}
//               width={0}
//               sizes="100vw"
//               objectFit="cover"
//               layout="fill"
//             />
//           </div>
//           <div className=" h-48 md:col-span-2 rounded-lg relative overflow-hidden">
//             <Image
//               src={galleryImg1}
//               height={0}
//               width={0}
//               sizes="100vw"
//               objectFit="cover"
//               layout="fill"
//             />
//           </div>
//           <div className=" h-48 md:col-span-2 rounded-lg relative overflow-hidden">
//             <Image
//               src={galleryImg2}
//               height={0}
//               width={0}
//               sizes="100vw"
//               objectFit="cover"
//               layout="fill"
//             />
//           </div>
//           <div className=" h-48 md:col-span-1 rounded-lg relative overflow-hidden">
//             <Image
//               src={galleryImg3}
//               height={0}
//               width={0}
//               sizes="100vw"
//               objectFit="cover"
//               layout="fill"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;
