import React, { useState } from "react";
import TopBar from "../components/TopBar";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "/public/images/github.png";
import LinkedInIcon from "/public/images/linkedin.png";
import SocialLinks from "../page_data/social_links.json";
import HomeData from "../page_data/home.json";
function MenuIcon() {
  return (
    <svg
      fill="#808080"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
    </svg>
  );
}
function LinkedInSocial({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick}>
      <Image className="rounded" src={LinkedInIcon} height="30" width="30" />
    </button>
  );
}
function GithubSocial({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick}>
      <Image className="rounded" src={GitHubIcon} height="30" width="30" />
    </button>
  );
}

function Socials() {
  const openWindow = (link: string) => {
    window.open(
      link,
      "_blank" // <- This is what makes it open in a new window.
    );
  };
  return (
    <div className="flex gap-2">
      <LinkedInSocial
        onClick={() => {
          openWindow(SocialLinks.linkedin);
        }}
      />
      <GithubSocial
        onClick={() => {
          openWindow(SocialLinks.github);
        }}
      />
    </div>
  );
}
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  return (
    <>
      <div className="p-2">
        <div className="bg-light hidden m-auto w-full sm:block sm:w-normal">
          <TopBar socials={Socials()}>
            <>
              <Link href="/">
                <h1 className="text-5xl font-medium cursor-pointer">
                  {HomeData.name}
                </h1>
              </Link>
              <Link href="/">
                <button className="font-medium text-xl">Home</button>
              </Link>
              <Link href="/work">
                <button className="font-medium text-xl">Work</button>
              </Link>
              <Link href="/projects">
                <button className="font-medium text-xl">Projects</button>
              </Link>
              <Link href="/resume">
                <button className="font-medium text-xl">Resume</button>
              </Link>
            </>
          </TopBar>
        </div>

        <div className="flex items-center bg-light block m-auto sm:hidden">
          <Link href="/">
            <h1 className="text-2xl font-medium py-2 flex-grow cursor-pointer">
              {HomeData.name}
            </h1>
          </Link>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              if (isInitial) {
                setIsInitial(false); //<- allows navigation menu to show after first click. This is to prevent closing animation from running on page load
              }
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
      {!isInitial && (
        <div
          className={`${
            isOpen ? "menu--open" : "menu--close"
          } flex flex-col absolute overflow-hidden gap-2 z-10 w-full bg-light border-t p-2 py-5 shadow-xl`}
        >
          <Link href="/">
            <button
              onClick={() => setIsOpen(false)}
              className="font-medium border rounded text-xl"
            >
              Home
            </button>
          </Link>
          <Link href="/work">
            <button
              onClick={() => setIsOpen(false)}
              className="font-medium border rounded text-xl"
            >
              Work
            </button>
          </Link>
          <Link href="/projects">
            <button
              onClick={() => setIsOpen(false)}
              className="font-medium border rounded text-xl"
            >
              Projects
            </button>
          </Link>
          <Link href="/resume">
            <button
              onClick={() => setIsOpen(false)}
              className="font-medium border rounded text-xl"
            >
              Resume
            </button>
          </Link>
          <div className="flex justify-center mt-7">{Socials()}</div>
        </div>
      )}
    </>
  );
}

export default Navigation;
