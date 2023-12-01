import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      src="/images/about/avatar.png"
      alt="Avatar"
      fill={true}
      sizes="350px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default Avatar;
