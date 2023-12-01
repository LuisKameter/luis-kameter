"use client";
import React from "react";
import Face from "../components/images/hero/Face";
import Star from "../components/images/hero/Star";
import Flower from "../components/images/hero/Flower";
import Medal from "../components/images/hero/Medal";
import Name from "../components/images/hero/Name";
import MouseMotion from "../app/utils/MouseMotion";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  const { mouseX, mouseY, maxW, maxH }: any = MouseMotion();

  const animate = (node: any) => {
    let factor = node.classList.contains("hero") ? 0.025 : 0.007;

    let changeX = factor * (mouseX - maxW / 2);
    let changeY = factor * (mouseY - maxH / 2);

    /*node.animate(
      { transform: `translate(${changeX}px, ${changeY}px)` },
      { duration: 1000, fill: "forwards" }
    );*/
  };

  return (
    <div className="relative">
      <div
        className="absolute left-0 top-8 md:top-0 blur-opac w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
        ref={(node) => {
          if (node) animate(node);
        }}
      >
        <Flower />
      </div>
      <div
        className="absolute right-0 bottom-12 md:bottom-0 blur-opac  w-[135px] h-[150px] md:w-[180px] md:h-[200px]"
        ref={(node) => {
          if (node) animate(node);
        }}
      >
        <Medal />
      </div>
      <div className="flex-col w-full justify-center">
        <div className="flex">
          <div className="hidden mt-40 md:flex md:visible items-center min-h-full">
            <div className="blur-opac">
              <Star />
            </div>
          </div>
          <div className="relative md:mx-32 flex justify-center items-center w-full h-full pointer-events-none mt-40 blur-opac">
            <div className="w-[250px] h-[250px] md:w-[430px] md:h-[430px]">
              <Name />
            </div>
            <div
              className="w-[260px] h-[260px] md:w-[450px] md:h-[450px] absolute hero blur-opac "
              ref={(node) => {
                if (node) animate(node);
              }}
            >
              <Face />
            </div>
          </div>
          <div className="hidden mt-40 md:flex md:visible items-center min-h-full">
            <div className="blur-opac">
              <Star />
            </div>
          </div>
        </div>
        <p
          className={
            playfair.className + " mt-24 text-center text-md blur-opac"
          }
        >
          THAT'S ME - I AM A WEB DEVELOPER
          <br />
          AND GRAPHIC DESIGNER FROM GERMANY
        </p>
      </div>
    </div>
  );
};

export default Hero;
