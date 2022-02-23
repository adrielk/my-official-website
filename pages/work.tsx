import React from "react";
import Head from "next/head";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Media from "../components/Media";
import WorksData from "../page_data/work.json";
import SEOContent from "../page_data/seo.json";

function Work() {
  return (
    <>
      <Head>
        <title>{SEOContent.work_page_title}</title>
        <meta name="description" content={SEOContent.work_page_desc} />
      </Head>
      <WideContentFrame extraStyle="bg-light">
        <section>
          <Header header={"My Work Experience 💼"} textColor="text-dark" />
          {WorksData.works &&
            WorksData.works.map((exp) => {
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

export default Work;
