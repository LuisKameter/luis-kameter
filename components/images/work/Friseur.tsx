import Image from "next/image";
import React from "react";

const Friseur = () => {
  return (
    <Image
      src="/images/work/work-2.JPG"
      alt="Friseur Eva Kameter"
      fill={true}
      sizes="900px"
      style={{ objectFit: "cover" }}
    ></Image>
  );
};

export default Friseur;
