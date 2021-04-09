export default function Photo_night(params) {
    return (
        <div className="gallery">
            <link
                href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
                rel="stylesheet"
            />
            <h1>the night collection</h1>

            <div>
                <div className="photo">
                    <a
                        className="btn"
                        href="/photo_night/cover art 12.jpg"
                        download
                    >
                        Download
                    </a>
                    <img
                        src="/photo_night/cover art 12.jpg"
                        alt="photo in gallery"
                    />
                </div>

                <div className="photo">
                    <a
                        className="btn"
                        href="/photo_night/cover art 14.jpg"
                        download
                    >
                        Download
                    </a>
                    <img
                        src="/photo_night/cover art 14.jpg"
                        alt="photo in gallery"
                    />
                </div>

                <div className="photo">
                    <a
                        className="btn"
                        href="/photo_night/cover art 15.jpg"
                        download
                    >
                        Download
                    </a>
                    <img
                        src="/photo_night/cover art 15.jpg"
                        alt="photo in gallery"
                    />
                </div>
            </div>

            <p>
                <em>
                    <span className="firstW">Nightime</span>
                </em>
                {', '}
                what a great time to get some great photos! These three are all
                places right by my house. Two of them are cover art for some of
                my music, and I think they are quite fitting. The first one from
                the left is my favorite. It's almost as though a fire is
                billowing out from behind the trees. And I must say wet pavement
                and of course a classic lens flare shot always look good.
            </p>
        </div>
    )
}
