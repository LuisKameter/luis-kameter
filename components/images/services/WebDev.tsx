import Image from "next/image";
import React from "react";

const WebDev = () => {
  return (
    <Image
      src="/images/services/webdev.png"
      alt="Web development"
      fill={true}
      sizes="600px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default WebDev;
