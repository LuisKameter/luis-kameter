import Image from "next/image";
import React from "react";

const Flower = () => {
  return (
    <Image
      src="/images/hero/flower.png"
      alt="flower"
      width={200}
      height={200}
    ></Image>
  );
};

export default Flower;
