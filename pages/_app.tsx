import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HomeData from "../page_data/home.json";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`${HomeData.name}'s Portfolio Website`}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
