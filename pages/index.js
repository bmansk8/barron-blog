import Article_pseudoChristianBands from "./posts/article_pseudoChristianBands"
import Article_suffering from "./posts/article_suffering";
import Song_questing from "./posts/song_questing";
import Photo_fog from "./posts/photo_fog";

export default function Home() {
  return (
    <div>
      <header>
      <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
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
      </header>

      <Article_pseudoChristianBands />
      <Photo_fog />
      <Song_questing />
      <Article_suffering />

      <footer>
        <h2>Made by barron v brock</h2>
      </footer>
    </div>
  );
}
