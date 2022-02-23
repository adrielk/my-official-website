import React from "react";
import { Experience } from "../interfaces/Experience";
import OpenIcon from "/public/icons/open-icon-light.png";
import Image from "next/image";
const Fade = require("react-reveal/Fade");

function Media({ exp }: { exp: Experience }) {
  const handleProjectLink = (link: string | null | undefined) => {
    if (link) {
      window.open(
        link,
        "_blank" // <- This is what makes it open in a new window.
      );
    }
  };
  return (
    <div className="my-5 border-b px-2">
      <Fade up>
        <h2 className="text-xl font-medium">
          {exp.title}
          {exp.role && (
            <>
              {" "}
              - <span className="italic">{exp.role} </span>
            </>
          )}
        </h2>
        <small className="block text-gray-600 italic">{exp.blurb}</small>

        <div className="my-5">
          {exp.img && (
            <div className="flex justify-center shadow-lg">
              <Image
                className="rounded"
                src={require(`/public/images/${exp.img}`)}
                alt={exp.img_alt}
                layout="intrinsic"
              />
            </div>
          )}
          <div className="text-base pt-2.5">{exp.detailed}</div>
          <span className="font-medium block italic pt-2">
            Technologies Used:{" "}
            <span className="font-normal">{exp.technologies?.join(", ")}</span>
          </span>
          {exp.link && (
            <button
              onClick={() => handleProjectLink(exp.link)}
              className="flex items-center bg-dark text-light rounded-sm mt-2 p-2.5 font-medium"
            >
              <span className="pr-2.5">Project Link</span>
              <Image
                className={"px-2"}
                src={OpenIcon}
                alt="open icon"
                layout="fixed"
                width="20"
                height="20"
              />
            </button>
          )}
        </div>
      </Fade>
    </div>
  );
}

export default Media;
