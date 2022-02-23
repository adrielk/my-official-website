import React from "react";
import Head from "next/head";
import Profile from "../components/Profile";
import ProfilePic from "/public/images/imcool.jpg";
import HomeData from "../page_data/home.json";
import WorksData from "../page_data/work.json";
import ProjectsData from "../page_data/projects.json";
import WideContentFrame from "../components/WideContentFrame";
import Header from "../components/Header";
import Preview from "../components/Preview";
import SEOContent from "../page_data/seo.json";
/*
TO DO: Make fully responsive and mobile friendly
- Add sliding animation between pages
- Custom domain name?
- SEO
*/
function SubHeader({ text }: { text: string }) {
  return <h2 className="block px-2 pb-2 pt-6 font-medium text-xl">{text}</h2>;
}
function Home() {
  return (
    <>
      <Head>
        <title>{SEOContent.home_page_title}</title>
        <meta name="description" content={SEOContent.home_page_desc} />
      </Head>
      <WideContentFrame extraStyle="bg-dark">
        <>
          <div className="py-7">
            <Profile
              image={ProfilePic}
              width="500"
              height="500"
              caption={HomeData.bio}
              alt_text={HomeData.img_alt}
            />
          </div>
        </>
      </WideContentFrame>
      <WideContentFrame extraStyle="bg-light">
        <section className="bg-light w-full pt-2">
          <Header header={"Portfolio Preview 👀"} textColor="text-dark" />
          <SubHeader text={"Work Experiences"} />
          <Preview experiences={WorksData.works} redirectLink={"/work"} />
        </section>
      </WideContentFrame>
      <WideContentFrame extraStyle="bg-light">
        <section>
          <SubHeader text={"Projects"} />
          <Preview
            experiences={ProjectsData.projects}
            redirectLink={"/projects"}
          />
        </section>
      </WideContentFrame>
    </>
  );
}

export default Home;
