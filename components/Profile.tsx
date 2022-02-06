import React, { useState } from "react";
import Image from "next/image";
import HomeData from "../page_data/home.json";
const Roll = require("react-reveal/Roll");
const Fade = require("react-reveal/Fade");
const Swing = require("react-reveal/Swing");

type AppProps = {
  image: StaticImageData;
  caption: string;
  width: string;
  height: string;
};

function Profile({ image, caption, width, height }: AppProps) {
  const [swing, setSwing] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center gap-5 p-2">
        <div className="w-700px hidden md:block">
          <Roll left delay={500}>
            <div onClick={() => setSwing(!swing)}>
              <Swing spy={swing}>
                <Image
                  className="rounded-full"
                  src={image}
                  width={width}
                  height={height}
                />
              </Swing>
            </div>
          </Roll>
        </div>

        <div className="flex flex-col justify-end items-center md:items-start gap-1">
          <div className="md:hidden w-1/2">
            <Roll left delay={500}>
              <div onClick={() => setSwing(!swing)}>
                <Swing spy={swing}>
                  <Image
                    className="rounded-full"
                    src={image}
                    width={width}
                    height={height}
                  />
                </Swing>
              </div>
            </Roll>
          </div>
          <Fade right delay={200}>
            <strong className="block font-bold text-2xl text-turquoise">
              {HomeData.name}
            </strong>
            <a
              className="no-underline hover:underline text-turquoise text-sm"
              href={`mailto: ${HomeData.email}`}
            >
              {HomeData.email}
            </a>
            <div className="block text-xl text-light text-center sm:text-left">
              {HomeData.title}
            </div>
            <small className="flex-grow-0 my-2 block text-base text-light">
              {caption}
            </small>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Profile;
