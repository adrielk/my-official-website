import React from "react";
import Head from "next/Head";
import ResumeData from "../page_data/resume.json";
import SEOContent from "../page_data/seo.json";

function Resume() {
  return (
    <>
      <Head>
        <title>{SEOContent.resume_page_title}</title>
        <meta name="description" content={SEOContent.resume_page_desc} />
      </Head>
      <div className="flex justify-center pt-5">
        <iframe
          src={ResumeData.link}
          width="640"
          height="825"
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
}

export default Resume;
