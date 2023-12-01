import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <Image
      src="/images/about/about-logos.png"
      alt="Logos"
      fill={true}
      sizes="170px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default Logos;
