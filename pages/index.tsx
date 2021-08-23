import React from "react";
import ProfileImage from "../components/ProfileImage";
import ProfilePic from "../images/imcool.jpg";
import HomeStaticData from "../page_data/home.json";
import { workExperiences } from "../page_data/work";
import { projects } from "../page_data/projects";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Preview from "../components/Preview";

function SubHeader({ text }: { text: string }) {
  return (
    <strong className="block pb-2 pt-6 font-medium text-xl">{text}</strong>
  );
}
function Home() {
  return (
    <>
      <WideContentFrame bgColor="bg-light">
        <div className="bg-light">
          <Header header={"Portfolio Preview 👀"} textColor="text-dark" />
          <SubHeader text={"Work Experiences"} />
          <Preview experiences={workExperiences} redirectLink={"/work"} />
        </div>
      </WideContentFrame>
      <WideContentFrame bgColor="bg-light">
        <div className="bg-light">
          <SubHeader text={"Projects"} />
          <Preview experiences={projects} redirectLink={"/projects"} />
        </div>
      </WideContentFrame>
      <WideContentFrame bgColor="bg-dark mt-5">
        <>
          <div className="py-7">
            <ProfileImage
              image={ProfilePic}
              width="500"
              height="500"
              caption={HomeStaticData.bio}
            />
          </div>
        </>
      </WideContentFrame>
    </>
  );
}

export default Home;
