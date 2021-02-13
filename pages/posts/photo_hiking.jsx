export default function Photo_fog(params) {
  return (
    <div className="gallery">
      <link
        href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
        rel="stylesheet"
      />
      <h1>the hiking collection</h1>

      {/*
        <a href='#' download></a>
        add a download button at some point
      */}  

      <img src="/photo_hiking/coverArt7.jpg" alt="photo in gallery" />
      <img src="/photo_hiking/coverArt8.jpg" alt="photo in gallery" />
      <img src="/photo_hiking/coverArt9.jpg" alt="photo in gallery" />

      <p>
        <em>
          <span className="firstW">Hiking!</span>
        </em>{" "}
        These photos are from a hiking trip I went on with a friend. It’s a
        small part of the Appalachian trail. We started at Woody’s gap and hiked
        up to preachers rock. Foggy day when I got there but by the time we came
        back down most of the fog had lifted. There are some wallpaper sized
        photos but i’m saving those for later thus why there are so few in this
        collection. Had an amazing time and would highly recommend going to
        preachers rock if you are ever in Georgia. Also, fun fact, simply right
        click on any photo and say save as! Feel free to download any of my
        photos.
      </p>
    </div>
  );
}
