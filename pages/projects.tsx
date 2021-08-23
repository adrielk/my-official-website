import React from "react";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Media from "../components/Media";
import BottomSpacer from "../components/BottomSpacer";
import { projects } from "../page_data/projects";
function Projects() {
  return (
    <>
      <WideContentFrame bgColor="bg-light">
        <>
          <Header header={"My Projects 🔩"} textColor="text-dark" />
          {projects &&
            projects.map((exp) => {
              return (
                <Media
                  title={exp.title}
                  role={exp.role}
                  blurb={exp.blurb}
                  img={exp.img}
                  caption={exp.detailed}
                  techList={exp.technologies}
                />
              );
            })}
          <BottomSpacer />
        </>
      </WideContentFrame>
    </>
  );
}

export default Projects;
