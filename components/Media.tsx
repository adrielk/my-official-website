import React from "react";
import Image from "next/image";
//bascically title header(name, date,), image and fading description (read more redirect).
interface imgDims {
  width?: string;
  height?: string;
}
function Media({
  title,
  role,
  blurb,
  img,
  imgDims,
  caption,
}: {
  title: string;
  role: string;
  blurb: string;
  img: StaticImageData;
  imgDims: imgDims;
  caption: string;
}) {
  return (
    <div className="my-5">
      <div className="text-lg">
        {title} - <span className="italic">{role}</span>
        <small className="block text-gray-600 italic">{blurb}</small>
        <Image src={img} width={imgDims.width} height={imgDims.height} />
        <div>{caption}</div>
      </div>
    </div>
  );
}

export default Media;
