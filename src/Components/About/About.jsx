import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import abdulrahmanImg from "../../assets/images/myPhoto.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleBox from "../TitleBox/TitleBox";
import useIsMobileWidth from "../../hooks/useIsMobileWidth";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const isMobileWidth = useIsMobileWidth();

  const containerRef = useRef();
  const titleBoxRef = useRef();

  useGSAP(
    () => {
      const titleBox = titleBoxRef.current;
      const titleBoxHeight = titleBox.offsetHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleBox,
          start: isMobileWidth ? "top center" : "top 10%",
          end: "bottom top",
          scrub: 1,
          pin: true,
          // pinSpacing: true,
          // markers: true,
        },
      });

      tl.from(
        ".title-box .about",
        { xPercent: -100, duration: 2, ease: "power2.out" },
        "start",
      )
        .from(
          ".title-box .me",
          { xPercent: 100, duration: 2, ease: "power2.out" },
          "start",
        )
        .from(".title-box p", {
          y: 200,
          opacity: 0,
          duration: 5,
          ease: "power2.out",
        });

      // .to(".title-box", { scale: .3, duration: 2})
      // .to(".title-box", { height: 'auto', duration: 1, ease: "none" });
    },
    { scope: containerRef },
  );

  const CurrentYear = new Date().getFullYear();

  return (
    <section ref={containerRef} className="pt-24 -bg-red-900" id="about">
      <div className="container relative px-10 overflow-hidden">
        <div ref={titleBoxRef} className="title-box -bg-red-900">
          <h2 className="title">
            <div className="about">About</div>
            <div className="me">Me</div>
          </h2>
          <p className="sub-title">
            Learn more about my journey, experiences, and what drives me every
            day!
          </p>
        </div>

        <div className="flex flex-col-reverse gap-5 mt-5 md:mt-10 md:flex-row -bg-lime-900">
          <div className="animated-text md:w-1/2">
            Hi, I’m Abdulrahman Medhat, a {CurrentYear - 2004}-year-old Software
            Engineering student at October 6 University of Technology in Cairo,
            Egypt, with a strong focus on Front-End Development. I build modern,
            responsive, and interactive user interfaces using technologies such
            as React, Next.js, and TypeScript. I enjoy solving problems and
            creating smooth animations and engaging user experiences that make
            websites feel fast and seamless. I also have solid experience
            working with APIs, integrating external data into applications and
            building dynamic web interfaces that interact efficiently with
            backend services. I’m constantly learning new technologies,
            exploring design trends, and improving my development skills to
            build better and more scalable web applications.
          </div>

          <div className="-bg-red-900 ">
            <div className="relative cursor-not-allowed group">
              <img
                src={abdulrahmanImg}
                alt="Abdulrahman photo"
                loading="lazy"
                className="w-full h-[300px] object-contain "
              />
              <div className="-bg-green-900 absolute inset-0 flex items-center justify-center w-[full] text-3xl text-center text-white transition duration-300 opacity-0 bg-black/70 group-hover:opacity-100 backdrop-blur">
                <p>Don't Touch it's Art</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
