import '../public/css/posts/article.scss'
import '../public/css/posts/gallery.scss'
import '../public/css/posts/song.scss'
import '../public/css/main.scss'
import '../styles/globals.scss'
import '../public/css/posts/wallpaper.scss'
import '../public/css/archived.scss'
import '../public/css/music.scss'
import '../public/css/commentaryLandingPage.scss'
import '../public/css/commentaries/commentary.scss'
import Layout from '../public/utilities/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Barron Brock's Blog</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="robots" content="index, follow" />
                <meta charSet="UTF-8" />
                <meta
                    name="keywords"
                    content="Barron Brock, Photos, Music, Barron Mills Von Brock, Blog"
                />
                <meta name="description" content="Personal blog site"></meta>
                <meta name="author" content="Barron Brock"></meta>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/utilities/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/utilities/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/utilities/favicon/favicon-16x16.png"
                />
                <link
                    rel="manifest"
                    href="/utilities/favicon/site.webmanifest"
                />
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
