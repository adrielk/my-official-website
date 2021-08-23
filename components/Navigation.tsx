import React from "react";
import TopBar from "../components/TopBar";
import Link from "next/link";
import Image from "next/image";
import WideContentFrame from "./WideContentFrame";
import GitHubIcon from "../images/github.png";
import LinkedInIcon from "../images/linkedin.png";

import SocialLinks from "../page_data/social_links.json";
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
  return (
    <WideContentFrame bgColor="bg-light">
      <TopBar socials={Socials()}>
        <>
          <div className="text-5xl font-medium">Adriel Kim</div>
          <Link href="/">
            <button className="font-medium text-xl">Home Page</button>
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
    </WideContentFrame>
  );
}

export default Navigation;
