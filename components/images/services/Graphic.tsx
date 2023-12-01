import Image from "next/image";
import React from "react";

const Graphic = () => {
  return (
    <Image
      src="/images/services/graphic.png"
      alt="Graphic Design"
      fill={true}
      sizes="600px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default Graphic;
