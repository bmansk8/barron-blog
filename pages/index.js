import Article_pseudoChristianBands from "./posts/articles/article_pseudoChristianBands";
import Article_EP from "./posts/articles/article_EP"
import Photo_fog from "./posts/photos/photo_fog";
import Photo_hiking from "./posts/photos/photo_hiking";
import Song_aWhisper from "./posts/songs/song_aWhisper";
import Wallpaper_large from "./posts/photos/wallpaper_large";

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
          Just a simple place for my more creative side. You can find my
          articles, music, and photos here.
        </p>
        <p>
          Want to contact me? Shoot me a email at{" "}
          <span className="special">bmansk14@gmail.com</span> or you can find
          out more about me on{" "}
          <a className="special" href="https://www.barronvbrock.net">
            barronvbrock.net
          </a>
        </p>
        <p>
          If you want to see the complete list of all my posts simply click{" "}
          <a className="special" href="/archives">
            here
          </a>{" "}
        </p>
      </header>

      <Article_EP />
      <Song_aWhisper />
      <Photo_hiking />
      <Article_pseudoChristianBands />
      <Wallpaper_large />
      <Photo_fog />

      <footer>
        <p>
          Can't find what you're looking for? I might have it archived, simply
          click{" "}
          <a className="special" href="/archives">
            here
          </a>{" "}
        </p>
        <h2>Made by barron v brock</h2>
      </footer>
    </div>
  );
}
