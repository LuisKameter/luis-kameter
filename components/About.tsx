"use client";

import React from "react";
import Globe from "./images/about/Globe";
import Logos from "./images/about/Logos";
import Avatar from "./images/about/Avatar";
import MouseMotion from "../app/utils/MouseMotion";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Indie_Flower } from "next/font/google";
const flower = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
});
import { Cormorant_Garamond } from "next/font/google";
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const About = () => {
  const { mouseX, mouseY, maxW, maxH }: any = MouseMotion();

  const animate = (node: any) => {
    let factor = node.classList.contains("hero") ? 0.025 : 0.007;

    let changeX = factor * (mouseX - maxW / 2);
    let changeY = factor * (mouseY - maxH / 2);

    node.animate(
      { transform: `translate(${changeX}px, ${changeY}px)` },
      { duration: 1000, fill: "forwards" }
    );
  };

  return (
    <div className="flex justify-center mt-32 lg:mt-64 w-full" id="about">
      <div className="max-w-[800px]">
        <div className="flex w-full justify-center">
          <div className="absolute -z-50">
            <div className="relative w-[500px] h-[500px]">
              <Globe />
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="w-full px-2 lg:w-[70%]">
            <p className="w-full text-5xl lg:text-7xl font-black mt-10 text-start">
              ABOUT ME
            </p>
            <p
              className={flower.className + " w-full text-2xl mt-6 text-start"}
            >
              I am a student at the technical university of munich with over 4
              years in programming experience. After founding my own clothing
              brand and engaging in different student inititaves like the TUM
              blockchain club and UnternehmerTUM, I decided to make my hobby a
              profession and become a web developer and graphic designer.
            </p>
          </div>
          <div className="w-full lg:w-[30%] flex items-center justify-center mt-8 lg:mt-0">
            <div
              className="relative w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]"
              ref={(node) => {
                if (node) animate(node);
              }}
            >
              <Avatar />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-10">
          <div className="relative w-[170px] h-[70px]">
            <Logos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
