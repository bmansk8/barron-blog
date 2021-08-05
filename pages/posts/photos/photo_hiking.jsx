export default function Photo_hiking(params) {
    return (
        <div className="gallery">
            <h1>the hiking collection</h1>

            <div>
                <div className="photo">
                    <a
                        className="btn"
                        href="https://barron-blog-photo.s3.amazonaws.com/hiking/coverArt7.jpg"
                        download
                    >
                        Download
                    </a>
                    <img
                        src="https://barron-blog-photo.s3.amazonaws.com/hiking/coverArt7.jpg"
                        alt="photo in gallery"
                    />
                </div>
                <div className="photo">
                    <a
                        className="btn"
                        href="https://barron-blog-photo.s3.amazonaws.com/hiking/coverArt8.jpg"
                        download
                    >
                        Download
                    </a>
                    <img
                        src="https://barron-blog-photo.s3.amazonaws.com/hiking/coverArt8.jpg"
                        alt="photo in gallery"
                    />
                </div>
                <div className="photo">
                    <a
                        className="btn"
                        href="https://barron-blog-photo.s3.amazonaws.com/hiking/coverArt9.jpg"
                        download
                    >
                        Download
                    </a>
                    <img
                        src="https://barron-blog-photo.s3.amazonaws.com/hiking/coverArt9.jpg"
                        alt="photo in gallery"
                    />
                </div>
            </div>

            <p>
                <em>
                    <span className="firstW">Hiking!</span>
                </em>{' '}
                These photos are from a hiking trip I went on with a friend.
                It’s a small part of the Appalachian trail. We started at
                Woody’s gap and hiked up to preachers rock. Foggy day when I got
                there but by the time we came back down most of the fog had
                lifted. There are some wallpaper sized photos but i’m saving
                those for later thus why there are so few in this collection.
                Had an amazing time and would highly recommend going to
                preachers rock if you are ever in Georgia. Also, fun fact, hit
                that download button if you want to save some of my work!
            </p>
        </div>
    )
}
