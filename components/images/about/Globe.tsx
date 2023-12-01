import Image from "next/image";
import React from "react";

const Globe = () => {
  return (
    <Image
      src="/images/about/globe.png"
      alt="Globe"
      fill={true}
      sizes="700px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default Globe;
