import React from "react";
import Image from "next/image";
import HomeData from "../page_data/home.json";

type AppProps = {
  image: StaticImageData;
  caption: string;
  width: string;
  height: string;
};

function Profile({ image, caption, width, height }: AppProps) {
  return (
    <>
      <div className="flex justify-center items-center gap-5 p-2">
        <div className="w-700px hidden md:block">
          <Image
            className="rounded-full"
            src={image}
            width={width}
            height={height}
          />
        </div>

        <div className="flex flex-col justify-end items-center md:items-start gap-1">
          <div className="md:hidden w-1/2">
            <Image
              className="rounded-full"
              src={require(`/public/images/${HomeData.img}`)}
              width={width}
              height={height}
            />
          </div>
          <strong className="block font-bold text-2xl text-turquoise">
            {HomeData.name}
          </strong>
          <div className="block text-xl text-light">{HomeData.title}</div>
          <small className="flex-grow-0 my-2 block text-base text-light">
            {caption}
          </small>
        </div>
      </div>
    </>
  );
}

export default Profile;
