import React, { useState, useRef, useEffect } from "react";

import animationData from "../../assets/images/Waving-Hand.json";
import abdulrahman3dImg from "../../assets/images/abdulrahman3d.png";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import Lottie from 'react-lottie-player';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  // State to handle hovering
  const [isHovered, setIsHovered] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: isHovered,
    stop: !isHovered,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieStyle = { display: "inline-block", verticalAlign: "middle" };

  const containerRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          toggleActions: "play reverse restart reverse",
        },
      });

      tl.from(".hero-left div", {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.25,
      });
    },
    { scope: containerRef },
  );

  return (
    <header
      ref={containerRef}
      className="flex min-h-screen p-5 hero md:h-screen place-items-center"
      id="home"
      onMouseEnter={() => setIsHovered(true)} // Start loop on hover
      onMouseLeave={() => setIsHovered(false)} // Stop loop when hover ends
    >
      <div className="w-full h-full bg-[#0d0d0d] rounded-[24px] ">
        <div className="flex flex-col items-center w-full h-full md:flex-row md:flex-nowrap -bg-red-900">
          <div className="hero-left mt-20 pl-5 md:mt-0  -md:absolute h-full text-3xl -bg-lime-800 flex flex-col justify-center gap-5 [&_div]:overflow-hidden text-white">
            <div>
              <span className="hello">
                Hello
                <span style={lottieStyle}>
                  <Lottie
                    loop
                    play={isHovered} 
                    animationData={animationData}
                    style={{
                      width: 40,
                      height:40,
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                </span>
                , I'am
              </span>
            </div>

            <div>
              <h1 className="my-name text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold md:ml-[-6px]">
                <div>Abdulrahman</div>
                <div>Medhat.</div>
              </h1>
            </div>

            <div className='[&_div]:overflow-hidden"'>
              <div className="overflow-hidden">
                <p className="bg-[#FB4E29] text-black w-fit">
                  Front-End Developer{" "}
                </p>
              </div>

              <div className="mt-2">
                <p>I love to create awesome websites.</p>
              </div>

              <div>
                <h6 className="mt-10 text-sm">
                  <span className="animate-online w-2 h-2 inline-block rounded-full bg-[#28e98c] mr-2"></span>
                  available for freelance
                </h6>
              </div>
            </div>
          </div>

          <div className="hero-right mx-auto h-full -bg-slate-950">
            <img
              src={abdulrahman3dImg}
              alt="Abdulrahman 3d image"
              loading="lazy"
              className="object-contain object-bottom w-full h-[450px] md:h-full -bg-orange-400 "
            />
          </div>
        </div>

        <div className="fixed z-50 font-black test text-9xl left-10 mix-blend-difference">
          test
        </div>
      </div>
    </header>
  );
}

export default Header;
