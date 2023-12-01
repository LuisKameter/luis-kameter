import Image from "next/image";
import React from "react";

const Together = () => {
  return (
    <Image
      src="/images/contact/contact.png"
      alt="Contact"
      fill={true}
      sizes="700px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default Together;
