export default function photo_fog(params) {
  return (
    <div className="gallery">
      <link
        href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
        rel="stylesheet"
      />
      <h1>the fog collection</h1>

      <div>
        <div className="photo">
          <a className='btn' href="/photo_fog/coverArt1.jpg" download>Download</a>
          <img src="/photo_fog/coverArt1.jpg" alt="photo in gallery" />
        </div>
        <div className="photo">
          <a className='btn' href="/photo_fog/coverArt2.jpg" download>Download</a>
          <img src="/photo_fog/coverArt2.jpg" alt="photo in gallery" />
        </div>
        <div className="photo">
          <a className='btn' href="/photo_fog/coverArt3.jpg" download>Download</a>
          <img src="/photo_fog/coverArt3.jpg" alt="photo in gallery" />
        </div>
        <div className="photo">
          <a className='btn' href="/photo_fog/coverArt4.jpg" download>Download</a>
          <img src="/photo_fog/coverArt4.jpg" alt="photo in gallery" />
        </div>
        <div className="photo">
          <a className='btn' href="/photo_fog/coverArt5.jpg" download>Download</a>
          <img src="/photo_fog/coverArt5.jpg" alt="photo in gallery" />
        </div>
        <div className="photo">
          <a className='btn' href="/photo_fog/coverArt6.jpg" download>Download</a>
          <img src="/photo_fog/coverArt6.jpg" alt="photo in gallery" />
        </div>
      </div>

      <p>
        <em>
          <span className="firstW">So,</span>
        </em>{" "}
        this collection is from three separate occasions. The first photo (top
        left) was on my daily run. It happened to be foggy that day, normally
        that part of the lake looks really ugly, so for such a great photo to
        come of it is pretty rare. The second one was in the midst of a
        recording session. It’s taken from within the studio. The rest were on
        an amazing hiking session around a reservoir near my house. Funny enough
        these are all on different days even thought the fog is somewhat
        consistent between them all.
      </p>
    </div>
  );
}
