import "../public/css/article.scss";
import "../public/css/gallery.scss";
import "../public/css/song.scss";
import "../public/css/main.scss";
import "../styles/globals.scss";
import "../public/css/wallpaper.scss";
import "../public/css/archived.scss";
import Layout from "../public/utilities/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
