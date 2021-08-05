export default function Photo_cloudlandCanyon(params) {
    return (
        <div className="gallery">

            <h1>Cloundland Canyon</h1>

            <div>
                <div className="photo">
                    <img
                        src="https://barron-blog-photo.s3.amazonaws.com/photo_cloudland/cover+art+40.jpg"
                        alt="photo of moss"
                    />
                </div>
                <div className="photo">
                    <img
                        src="https://barron-blog-photo.s3.amazonaws.com/photo_cloudland/cover+art+41.jpg"
                        alt="photo of wood"
                    />
                </div>
                <div className="photo">
                    <img
                        src="https://barron-blog-photo.s3.amazonaws.com/photo_cloudland/cover+art+42.jpg"
                        alt="photo of bridge"
                    />
                </div>
            </div>

            <p>
                <em>
                    <span className="firstW">So I recently went hiking</span>
                </em>{' '}
                with a large group of friends. We went to a place called
                Cloudland Canyon in northwest georgia. Roughly a two and a half
                hour drive for me. Was able to see two waterfalls and loads of
                amazing landscapes. One moment you're in the mountains, then the
                valley, then the arid desert. Truly an amazing place to visit. I
                had no idea such a place was in Georgia. Tons of photos on this
                one so here is a single download button for all the photos. They
                are all jpegs so not super compressed but easy enough to
                download. Some huge panoramas, 4:3, 19:9, and 1:1 along with
                some slow motion footage of some of the water falls. I don’t
                know if I have touched on this before but these are always taken
                with my phone. Maybe at some point I will get a real camera 😂!
            </p>
            <a
                className="btn"
                href="https://barron-blog-photo.s3.amazonaws.com/photo_cloudland/cloudland+canyon.zip"
                download
            >
                Download Photos
            </a>
        </div>
    )
}
