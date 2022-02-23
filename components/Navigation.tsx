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
    <button onClick={onClick} aria-label="open linkedin">
      <Image
        className="rounded"
        src={LinkedInIcon}
        alt="linkedin icon"
        height="30"
        width="30"
      />
    </button>
  );
}
function GithubSocial({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button onClick={onClick} aria-label="open github">
      <Image
        className="rounded"
        src={GitHubIcon}
        alt="github icon"
        height="30"
        width="30"
      />
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
    <nav>
      <div className="fixed w-full z-20 bg-light">
        <div className="hidden m-auto w-full sm:block sm:w-normal">
          <TopBar socials={Socials()}>
            <>
              <Link href="/" passHref>
                <h1 className="text-5xl font-medium cursor-pointer pl-2">
                  {HomeData.name}
                </h1>
              </Link>
              <Link href="/" passHref>
                <button
                  className="font-medium text-xl"
                  aria-label="home button"
                >
                  Home
                </button>
              </Link>
              <Link href="/work" passHref>
                <button
                  className="font-medium text-xl"
                  aria-label="work button"
                >
                  Work
                </button>
              </Link>
              <Link href="/projects" passHref>
                <button
                  className="font-medium text-xl"
                  aria-label="projects button"
                >
                  Projects
                </button>
              </Link>
              <Link href="/resume" passHref>
                <button
                  className="font-medium text-xl"
                  aria-label="resume button"
                >
                  Resume
                </button>
              </Link>
            </>
          </TopBar>
        </div>

        <div className="flex items-center p-2 bg-light block m-auto sm:hidden">
          <Link href="/" passHref>
            <h1 className="text-2xl font-medium flex-grow cursor-pointer">
              {HomeData.name}
            </h1>
          </Link>
          <button
            aria-label="navigation menu button"
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
        {!isInitial && (
          <div
            className={`${
              isOpen ? "menu--open" : "menu--close"
            } flex flex-col absolute overflow-hidden z-10 w-full bg-light border-t py-5 shadow-xl`}
          >
            <Link href="/" passHref>
              <button
                aria-label="home button"
                onClick={() => setIsOpen(false)}
                className="font-medium p-2 text-xl"
              >
                Home
              </button>
            </Link>
            <Link href="/work" passHref>
              <button
                aria-label="work button"
                onClick={() => setIsOpen(false)}
                className="font-medium p-2 bg-gray-200 text-xl"
              >
                Work
              </button>
            </Link>
            <Link href="/projects" passHref>
              <button
                aria-label="projects button"
                onClick={() => setIsOpen(false)}
                className="font-medium p-2 text-xl"
              >
                Projects
              </button>
            </Link>
            <Link href="/resume" passHref>
              <button
                aria-label="resume button"
                onClick={() => setIsOpen(false)}
                className="font-medium p-2 bg-gray-200 text-xl"
              >
                Resume
              </button>
            </Link>
            <div className="flex justify-center mt-7">{Socials()}</div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
