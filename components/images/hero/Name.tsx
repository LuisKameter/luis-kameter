import Image from "next/image";
import React from "react";

const Name = () => {
  return (
    <Image
      className="spin-slow"
      src="/images/hero/name.png"
      alt="name"
      width={430}
      height={430}
    ></Image>
  );
};

export default Name;
