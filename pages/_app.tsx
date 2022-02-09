import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEOContent from "../page_data/seo.json";

//to do:
// Make SEO customizable!!! (right now it's hardcoded with your name lol)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`${SEOContent.author}'s Portfolio Website`}</title>
        <meta name="keywords" content={SEOContent.keywords} />

        <meta
          property="og:title"
          content={`${SEOContent.author}'s Portfolio`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SEOContent.thumbnail_url} />
        <meta property="og:url" content={SEOContent.url} />
        <meta property="og:description" content={SEOContent.desc} />
        <meta name="author" content={SEOContent.author} />
        <meta name="description" content={SEOContent.desc} />
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
