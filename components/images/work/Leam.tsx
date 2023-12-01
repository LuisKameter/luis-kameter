import Image from "next/image";
import React from "react";

const Leam = () => {
  return (
    <Image
      src="/images/work/work-1.JPG"
      alt="Leam"
      fill={true}
      sizes="900px"
      style={{ objectFit: "cover" }}
    ></Image>
  );
};

export default Leam;
