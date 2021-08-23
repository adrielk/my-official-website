import React from "react";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Media from "../components/Media";
import BottomSpacer from "../components/BottomSpacer";
import { workExperiences } from "../page_data/work";
function Work() {
  return (
    <>
      <WideContentFrame bgColor="bg-light">
        <>
          <Header header={"My Work Experience 💼"} textColor="text-dark" />
          {workExperiences &&
            workExperiences.map((exp) => {
              return (
                <div id={exp.title} key={exp.title}>
                  <Media exp={exp} />
                </div>
              );
            })}
          <BottomSpacer />
        </>
      </WideContentFrame>
    </>
  );
}

export default Work;
