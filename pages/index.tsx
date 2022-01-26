import React from "react";
import Profile from "../components/Profile";
import ProfilePic from "../images/imcool.jpg";
import HomeData from "../page_data/home.json";
import WorksData from "../page_data/work.json";
import ProjectsData from "../page_data/projects.json";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Preview from "../components/Preview";

/*
TO DO: Make fully responsive and mobile friendly
- Add sliding animation between pages
- Custom domain name?
- SEO
*/
function SubHeader({ text }: { text: string }) {
  return (
    <strong className="block px-2 pb-2 pt-6 font-medium text-xl">{text}</strong>
  );
}
function Home() {
  return (
    <>
      <WideContentFrame extraStyle="bg-dark">
        <>
          <div className="profile py-7">
            <Profile
              image={ProfilePic}
              width="500"
              height="500"
              caption={HomeData.bio}
            />
          </div>
        </>
      </WideContentFrame>
      <WideContentFrame extraStyle="bg-light">
        <div className="bg-light w-full pt-2">
          <Header header={"Portfolio Preview 👀"} textColor="text-dark" />
          <SubHeader text={"Work Experiences"} />
          <Preview experiences={WorksData.works} redirectLink={"/work"} />
        </div>
      </WideContentFrame>
      <WideContentFrame extraStyle="bg-light">
        <div className="bg-light">
          <SubHeader text={"Projects"} />
          <Preview
            experiences={ProjectsData.projects}
            redirectLink={"/projects"}
          />
        </div>
      </WideContentFrame>
    </>
  );
}

export default Home;
