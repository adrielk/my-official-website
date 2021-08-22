import React from "react";
import ProfileImage from "../components/ProfileImage";
import ProfilePic from "../images/imcool.jpg";
import HomeStaticData from "../page_data/home.json";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Media from "../components/Media";
import TestImage from "../images/imcool.jpg";
function Home() {
  return (
    <>
      <WideContentFrame bgColor="bg-light">
        <div className="py-7">
          <Header header={"My Work Experience"} textColor="text-dark" />
          <Media
            title={"Curiosity Stream"}
            role={"Software Engineering Intern"}
            blurb={
              "Curiosity Stream is a streaming platform for educational entertainment"
            }
            img={TestImage}
            imgDims={{ width: "1000", height: "500" }}
            caption={"SOME STUFF ABOUT MY STUFF"}
          />
        </div>
      </WideContentFrame>
      <WideContentFrame bgColor="bg-light">
        <div className="py-7">
          <Header header={"My Projects"} textColor="text-dark" />
        </div>
      </WideContentFrame>
      <WideContentFrame bgColor="bg-dark">
        <div className="py-7">
          <ProfileImage
            image={ProfilePic}
            width="500"
            height="500"
            caption={HomeStaticData.bio}
          />
        </div>
      </WideContentFrame>
    </>
  );
}

export default Home;
