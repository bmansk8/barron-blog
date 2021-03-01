export default function Song_lyingInTheSand(params) {
  return (
    <div className="song">
      <link
        href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
        rel="stylesheet"
      />
      <h1>Lying In The Sand</h1>

      {/* 
      I want to start using my rss feed at some point
      */}

      <iframe
        width="400"
        height="400"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/970580383&color=%235bc0be&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <p>
        <em>
          <span className="firstW">This</span>
        </em>{" "}
        song is somewhat of a send off to the trilogy of these more melancholy
        lyrical songs. For sure been a wild ride with everything going on in my
        life. Some really good solo's in this one and my singing has improved
        vastly over the first in this series. As always I played everything (or
        at least programmed it).
      </p>
    </div>
  );
}
