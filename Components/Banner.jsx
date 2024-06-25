import { useRef } from "react";
import { Button } from "@/Components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useSWR from "swr";
import bannerFetcher from "@/lib/serviceFetcher";
function Banner() {
  const textRef = useRef(null);
  const { data } = useSWR(`/banners?populate=*`, bannerFetcher);

  const videoUrl = `${
    process.env.NEXT_PUBLIC_STRAPI_URL +
    data?.data[0]?.attributes?.cover?.data?.attributes?.url
  }`;
  useGSAP(() => {
    const textElement = textRef.current;

    // Exit early if the element is not available
    if (!textElement) return;

    // Define the initial position and opacity of the element
    gsap.set(textElement, { x: "-100%", opacity: 0 });

    // Animate the element to its final position and opacity
    gsap.fromTo(
      textElement,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1, // Adjust the duration of the appearance as needed
        ease: "power3.out", // Adjust the easing function as needed
        onComplete: () => {
          // Animate the element to fade out after a certain duration
          gsap.to(textElement, {
            opacity: 0,
            duration: 1, // Adjust the duration of the fade out as needed
            delay: 2, // Adjust the delay before fading out as needed
            ease: "power3.out", // Adjust the easing function as needed
          });
        },
      }
    );
  }, []);
  return (
    <div className="w-5/6 md:w-11/12 relative mx-auto">
      <div className="bg-cyan-500  rounded-md h-60 md:h-[400px] lg:h-[500px] relative">
        <video
          className="rounded-md absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          muted
          loop
        />
        <h1
          ref={textRef}
          className="absolute top-11 left-8 text-xl md:text-4xl  text-white md:leading-[3.9rem] font-semibold"
        >
          Koala will make sure that you
          <br /> will have a wonderful experience
        </h1>

        <div className="hidden  md:block absolute bg-white rounded-md p-5 w-[230px] h-[220px] right-10 top-11 shadow-md">
          <h2 className="text-xl ">
            Koala .co has been active for over a month to deliver services
          </h2>
          <Button className="bg-cyan-500 hover:bg-cyan-400 mt-6">
            About us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
