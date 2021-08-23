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
  techList,
}: {
  title: string | null;
  role: string | null;
  blurb: string | null;
  img?: typeof import("*.jpg") | typeof import("*.png");
  imgDims?: imgDims | null;
  caption: string | null;
  techList: string[] | null;
}) {
  return (
    <div className="my-5 border-b">
      <div className="text-xl font-medium">
        {title}
        {role && (
          <>
            {" "}
            - <span className="italic">{role} </span>
          </>
        )}
      </div>
      <small className="block text-gray-600 italic">{blurb}</small>
      <div className="my-5">
        {img && (
          <div className="flex justify-center">
            <Image className="rounded" src={img} layout="intrinsic" />
          </div>
        )}
        <div className="text-base pt-2.5">{caption}</div>
        <span className="font-medium block italic pt-2">
          Technologies Used:{" "}
          <span className="font-normal">{techList?.join(", ")}</span>
        </span>
      </div>
    </div>
  );
}

export default Media;
