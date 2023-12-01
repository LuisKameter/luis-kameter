import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image src="/images/logo.png" alt="logo" width={60} height={60}></Image>
  );
};

export default Logo;
