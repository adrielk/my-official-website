import React from "react";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Media from "../components/Media";
import BottomSpacer from "../components/BottomSpacer";
import ProjectsData from "../page_data/projects.json";

function Projects() {
  return (
    <>
      <WideContentFrame extraStyle="bg-light">
        <>
          <Header header={"My Projects 🔩"} textColor="text-dark" />
          {ProjectsData.projects &&
            ProjectsData.projects.map((exp) => {
              return (
                <div id={exp.title} key={exp.title}>
                  <Media exp={exp} />
                </div>
              );
            })}
        </>
      </WideContentFrame>
    </>
  );
}

export default Projects;
