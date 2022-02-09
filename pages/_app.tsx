import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HomeData from "../page_data/home.json";

//to do:
// Make SEO customizable!!! (right now it's hardcoded with your name lol)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`${HomeData.name}'s Portfolio Website`}</title>
        <meta
          property="og:title"
          content="Adriel Kim's Portfolio"
          key="title"
        />
        <meta
          name="description"
          content="Adriel is a Computer Science major at the University of Virginia open to full-time software engineering jobs. Check out what he's been working on!"
        />
        <meta
          name="keywords"
          content="Adriel Kim, Adriel, Kim, UVA, University of Virginia, Virginia, Computer Science, Engineering"
        />
        <img />
      </Head>
      <Navigation />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
export default MyApp;
