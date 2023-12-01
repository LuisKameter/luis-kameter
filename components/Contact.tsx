"use client";

import React from "react";
import Together from "./images/contact/Together";

const Contact = () => {
  return (
    <div>
      <div className="md:flex mt-32 lg:mt-64 w-[100vw]" id="contact">
        <div className="flex justify-center items-center py-12 md:py-0 w-full md:w-[50vw] bg-black">
          <div className="text-white max-w-[500px] enter-zoom">
            <p className="w-full text-center text-4xl md:text-6xl lg:text-7xl font-bold">
              LET'S WORK TOGETHER
            </p>
            <div className="flex justify-center w-full mt-20">
              <a
                className="hover:text-black hover:bg-white duration-300 ease-in font-bold text-2xl md:text-4xl py-4 px-12 border-white border-[3px] md:border-4"
                href="mailto:contact@luiskameter.com"
              >
                contact
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-[50vw] bg-white">
          <div className="relative w-[700px] h-[500px] md:h-[700px] enter-zoom">
            <Together />
          </div>
        </div>
      </div>
      <div className="flex w-[100vw]">
        <div className="flex justify-start items-center w-full bg-black pl-4 py-8 md:pl-10 md:pb-10">
          <div className="text-white font-black text-2xl md:text-4xl">
            <div className="cursor-pointer group">
              <a className="group-hover:text-[#1FD0FD] duration-200 ease-in">
                work
              </a>
            </div>
            <div className="cursor-pointer group">
              <a className="group-hover:text-[#1FD0FD] duration-200 ease-in">
                services
              </a>
            </div>
            <div className="cursor-pointer group">
              <a className="group-hover:text-[#1FD0FD] duration-200 ease-in">
                about
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center w-full bg-white pl-4 py-8 md:pl-10 md:pb-10">
          <div className="text-black font-black text-2xl md:text-4xl">
            <div className="cursor-pointer group">
              <a className="group-hover:text-[#5A70E0] duration-200 ease-in">
                imprint
              </a>
            </div>
            <div className="cursor-pointer group">
              <a className="group-hover:text-[#5A70E0] duration-200 ease-in">
                privacy
                <br />
                policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
