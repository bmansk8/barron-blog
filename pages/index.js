import Article_fitness from './posts/articles/article_fitness'
import Photo_walking from './posts/photos/photo_walking'
import Song_memories from './posts/songs/song_memories'

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
                    go to my{' '}
                    <a className="special" href="/archives">
                        archives
                    </a>{' '}
                </p>
            </header>

            <Photo_walking />
            <Song_memories />
            <Article_fitness />

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
