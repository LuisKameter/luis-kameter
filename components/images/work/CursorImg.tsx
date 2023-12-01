import Image from "next/image";
import React from "react";

const CursorImg = () => {
  return (
    <Image
      src="/images/work/cursor.png"
      alt="Cursor"
      fill={true}
      sizes="50px"
      style={{ objectFit: "contain" }}
    ></Image>
  );
};

export default CursorImg;
