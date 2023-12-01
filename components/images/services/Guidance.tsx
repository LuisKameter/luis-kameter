import Image from "next/image";
import React from "react";

const Guidance = () => {
  return (
    <Image
      src="/images/services/guidance.png"
      alt="Graphic Design"
      fill={true}
      sizes="700px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default Guidance;
