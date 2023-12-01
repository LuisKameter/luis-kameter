import Image from "next/image";
import React from "react";

const Bluepaca = () => {
  return (
    <Image
      src="/images/work/work-3.JPG"
      alt="Bluepaca"
      fill={true}
      sizes="900px"
      style={{ objectFit: "cover" }}
    ></Image>
  );
};

export default Bluepaca;
