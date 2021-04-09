import Article_EP from './posts/articles/article_EP'
import Photo_night from './posts/photos/photo_night'
import Song_ifICouldSee from './posts/songs/song_ifICouldSee'
import Song_theDunningKrugerEffect from './posts/songs/song_theDunningKrugerEffect'

export default function Home() {
    return (
        <div>
            <header>
                <link
                    href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
                    rel="stylesheet"
                />
                <h1>My creative corner</h1>
                <p>
                    Just a simple place for my more creative side. You can find
                    my articles, music, and photos here.
                </p>
                <p>
                    Want to contact me? Shoot me a email at{' '}
                    <span className="special">bmansk14@gmail.com</span> or you
                    can find out more about me on{' '}
                    <a className="special" href="https://www.barronvbrock.net">
                        barronvbrock.net
                    </a>
                </p>
                <p>
                    If you want to see the complete list of all my posts simply
                    click{' '}
                    <a className="special" href="/archives">
                        archives
                    </a>{' '}
                </p>
            </header>

            <Song_theDunningKrugerEffect />
            <Photo_night />
            <Article_EP />
            <Song_ifICouldSee />

            <footer>
                <p>
                    Can't find what you're looking for? I might have it{' '}
                    <a className="special" href="/archives">
                        archived
                    </a>{' '}
                </p>
                <h2>Made by barron v brock</h2>
            </footer>
        </div>
    )
}
