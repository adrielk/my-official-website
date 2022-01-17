import React from "react";
import { Experience } from "../interfaces/Experience";
import Image from "next/image";
import OpenIcon from "../images/open-icon.png";
import { useRouter } from "next/router";

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
  const router = useRouter();
  return (
    <>
      {experiences.map((exp, i) => {
        return (
          <div
            key={exp.title}
            className={`border-b border-t rounded-0 sm:rounded p-2 shadow-lg ${
              i % 2 == 0 ? "bg-gray-200" : "bg-light"
            } py-2.5`}
          >
            <div className="py-2 font-medium">
              {exp.title}
              {exp.role && (
                <>
                  {" "}
                  - <span className="italic">{exp.role}</span>
                </>
              )}
            </div>
            <div className="text-base font-normal ">
              {exp.detailed?.split(" ").slice(0, 50).join(" ")} ...{"  "}
              <a href={`#${exp.title}`}>
                <ViewMore
                  onClick={() => {
                    router.push(redirectLink);
                  }}
                />
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Preview;
