import React from "react";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Media from "../components/Media";
import BottomSpacer from "../components/BottomSpacer";
import WorksData from "../page_data/work.json";
function Work() {
  return (
    <>
      <WideContentFrame extraStyle="bg-light">
        <>
          <Header header={"My Work Experience 💼"} textColor="text-dark" />
          {WorksData.works &&
            WorksData.works.map((exp) => {
              return (
                <div id={exp.title} key={exp.title}>
                  <Media exp={exp} />
                </div>
              );
            })}
          {/* <BottomSpacer /> */}
        </>
      </WideContentFrame>
    </>
  );
}

export default Work;
