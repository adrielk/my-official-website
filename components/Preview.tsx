import React from "react";
import { Experience } from "../interfaces/Experience";
import Image from "next/image";
import OpenIcon from "/public/icons/open-icon.png";
import { useRouter } from "next/router";
const Fade = require("react-reveal/Fade");

function PreviewItem({
  exp,
  redirectLink,
  i,
}: {
  exp: Experience;
  redirectLink: string;
  i: number;
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(redirectLink);
  };
  return (
    <div
      key={exp.title}
      className={`flex flex-col sm:flex-row items-center overflow-hidden border-b border-t rounded-0 sm:rounded p-2 shadow-lg ${
        i % 2 == 0 ? "bg-gray-200" : "bg-light"
      } py-2.5`}
    >
      {/* change layout in mobile */}
      {exp.thumbnail && (
        <a
          href={`#${exp.title}`}
          onClick={handleClick}
          className="thumbnail flex-none m-3 w-40"
        >
          <Fade left>
            <Image
              className="rounded"
              alt="Thumbnail picture"
              layout="intrinsic"
              src={require(`/public/images/${exp.thumbnail}`)}
            />
          </Fade>
        </a>
      )}

      {/* <div className="thumbnail relative flex-none m-3 w-full sm:w-60 h-40 shadow-md"> */}

      {!exp.thumbnail && exp.img && (
        <a
          href={`#${exp.title}`}
          onClick={handleClick}
          className="thumbnail flex-none m-3 w-full sm:w-40"
        >
          <Fade left>
            <Image
              className="rounded"
              alt="Thumbnail picture"
              layout="intrinsic"
              src={require(`/public/images/${exp.img}`)}
            />
          </Fade>
        </a>
      )}
      <Fade right>
        <div>
          <span className="block py-2 font-medium">
            {exp.title}
            {exp.role && (
              <>
                {" "}
                - <span className="italic">{exp.role}</span>
              </>
            )}
          </span>
          <span className="block text-base font-normal ">
            {exp.detailed?.split(" ").slice(0, 50).join(" ")} ...{"  "}
            <a href={`#${exp.title}`}>
              <ViewMore onClick={handleClick} />
            </a>
          </span>
        </div>
      </Fade>
    </div>
  );
}

function ViewMore({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick}>
      <Image
        className={"px-2s"}
        src={OpenIcon}
        layout="fixed"
        width="20"
        height="20"
      />
    </button>
  );
}
function Preview({
  experiences,
  redirectLink,
}: {
  experiences: Experience[];
  redirectLink: string;
}) {
  return (
    <>
      {experiences.map((exp, i) => {
        return (
          <div key={exp.title}>
            <PreviewItem {...{ exp, redirectLink, i }} />
          </div>
        );
      })}
    </>
  );
}

export default Preview;
