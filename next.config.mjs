/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

export default {
  ...nextConfig,
  ...withVideos(),
};

// formats: ["image/avif", "image/webp"],
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "http://localhost:1337",
//         port: "",
//         pathname: "/image/upload/**",
//       },
//     ],
