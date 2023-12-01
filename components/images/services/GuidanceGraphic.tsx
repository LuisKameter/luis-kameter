import Image from "next/image";
import React from "react";

const GuidanceGraphic = () => {
  return (
    <Image
      src="/images/services/guidance-graphic.png"
      alt="Graphic Design"
      fill={true}
      sizes="600px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default GuidanceGraphic;
