import "../public/css/article.scss";
import "../public/css/gallery.scss";
import "../public/css/song.scss";
import "../public/css/main.scss";
import "../styles/globals.scss";
import "../public/css/wallpaper.scss";
import "../public/css/archived.scss";
import Layout from "../public/utilities/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <title>Barron Brock's Blog</title>
        <meta
          name="keywords"
          content="Barron Brock, Photos, Music, Barron Mills Von Brock, Blog"
        ></meta>
        <meta name="description" content="Personal blog site"></meta>
        <meta name="author" content="Barron Brock"></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
