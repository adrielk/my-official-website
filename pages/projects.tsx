import React from "react";
import Head from "next/head";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Media from "../components/Media";
import ProjectsData from "../page_data/projects.json";
import SEOContent from "../page_data/seo.json";

function Projects() {
  return (
    <>
      <Head>
        <title>{SEOContent.project_page_title}</title>
        <meta name="description" content={SEOContent.project_page_desc} />
      </Head>
      <WideContentFrame extraStyle="bg-light">
        <section>
          <Header header={"My Projects 🔩"} textColor="text-dark" />
          {ProjectsData.projects &&
            ProjectsData.projects.map((exp) => {
              return (
                <article id={exp.title} key={exp.title}>
                  <Media exp={exp} />
                </article>
              );
            })}
        </section>
      </WideContentFrame>
    </>
  );
}

export default Projects;
