function A_li(props) {
  return (
    <li>
      <a href={"/posts/" + props.name}>{props.name} </a>
    </li>
  );
}

/*
At some point i want to simply look in /posts and dynamiclly make the list
Maybe far into the future add a way to search
*/

export default function archived() {
  return (
    <div className="archived">
      <link
        href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
        rel="stylesheet"
      />
      <h1>Archived posts</h1>
      <p>A list of all my posts on the site so far.</p>
      <ul>
        <A_li name="article_pseudoChristianBands" />
        <A_li name="article_suffering" />
        <A_li name="photo_fog" />
        <A_li name="photo_hiking" />
        <A_li name="wallpaper_large" />
        <A_li name="song_questing" />
        <A_li name="song_lyingInTheSand" />
      </ul>
    </div>
  );
}
