"use client";
import React from "react";
import Logo from "../components/images/Logo";
import Copyright from "./images/navbar/Copyright";
import Smile from "./images/navbar/Smile";
import SwipeMotion from "@/app/utils/SwipeMotion";
import MouseMotion from "@/app/utils/MouseMotion";
import ScrollPosition from "@/app/utils/ScrollPosition";
import { useState } from "react";

const NavbarMobile = () => {
  let scrollUpdater = ScrollPosition();
  let y: number = MouseMotion().mouseY;
  let swipe: number = SwipeMotion();

  const [menuOpen, setMenuOpen] = useState(false);

  const checkSwipe = (node: any) => {
    setMenuOpen(node.classList.contains("menu-active"));
    if (swipe < 1 && menuOpen) {
      node.classList.remove("menu-active");
    } else if (swipe > 0 && !menuOpen && y < 200) {
      node.classList.add("menu-active");
    }
  };
  const checkMenu = (node: any) => {
    if (menuOpen) {
      node.classList.add("menu-open");
    } else {
      node.classList.remove("menu-open");
    }
  };
  return (
    <nav className="lg:hidden">
      <div className="fixed z-50 px-6 md:px-10 w-full h-[100px] flex justify-center items-center">
        <div>
          <Logo />
        </div>
        <div className="w-full flex justify-center">
          <div
            className="fixed w-[100px] md:w-[200px] h-[6px] bg-black rounded-full ease-in duration-500 top-[50px]"
            ref={(node) => {
              if (!node) return;
              checkMenu(node);
            }}
          ></div>
        </div>
        <div>
          <Copyright />
        </div>
      </div>
      <div
        className="-translate-y-[100%] flex flex-col justify-center top-0 left-0 fixed w-screen backdrop-blur-md h-screen bg-white/80 z-40 ease-in duration-500"
        ref={(node) => {
          if (!node) return;
          checkSwipe(node);
        }}
      >
        <div className="h-[60%] flex flex-col">
          <div className="flex items-center w-[70%] mx-auto h-full">
            <div className="invert">
              <Smile />
            </div>
            <button
              className="font-black ml-4 text-4xl text-black"
              onClick={() => {
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
                document
                  .getElementsByClassName("menu-active")[0]
                  ?.classList.remove("menu-active");
              }}
            >
              work
            </button>
          </div>
          <div className="flex items-center w-[70%] mx-auto h-full">
            <div className="invert">
              <Smile />
            </div>
            <button
              className="font-black ml-4 text-4xl text-black"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
                document
                  .getElementsByClassName("menu-active")[0]
                  ?.classList.remove("menu-active");
              }}
            >
              services
            </button>
          </div>
          <div className="flex items-center w-[70%] mx-auto h-full">
            <div className="invert">
              <Smile />
            </div>
            <button
              className="font-black ml-4 text-4xl text-black"
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
                document
                  .getElementsByClassName("menu-active")[0]
                  ?.classList.remove("menu-active");
              }}
            >
              about
            </button>
          </div>
          <div className="flex items-center w-[70%] mx-auto h-full">
            <div className="invert">
              <Smile />
            </div>
            <button
              className="font-black ml-4 text-4xl text-black"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                document
                  .getElementsByClassName("menu-active")[0]
                  ?.classList.remove("menu-active");
              }}
            >
              contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
