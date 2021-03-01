import fs from "fs";

export async function getStaticProps() {
  /*for sure this code can be refactored somehow...*/
  const namesArticle = fs.readdirSync("./pages/posts/articles");
  const articlesClean = namesArticle.map((i) => {
    i = i.replace(/\.jsx$/, "");
    return i;
  });
  const namesPhotos = fs.readdirSync("./pages/posts/photos");
  const photosClean = namesPhotos.map((i) => {
    i = i.replace(/\.jsx$/, "");
    return i;
  });
  const namesSongs = fs.readdirSync("./pages/posts/songs");
  const songsClean = namesSongs.map((i) => {
    i = i.replace(/\.jsx$/, "");
    return i;
  });

  return { props: { articlesClean, photosClean, songsClean } };
}

/*this should be in it's own file at some point */
function A_li(props) {
  return (
    <li>
      <a href={props.route + props.name}>{props.name} </a>
    </li>
  );
}

export default function archived({ articlesClean, photosClean, songsClean }) {
  return (
    <div className="archived">
      <link
        href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
        rel="stylesheet"
      />
      <h1>Archived posts</h1>
      <p>A list of all my posts on the site so far.</p>
      <ul>
        <h3>Articles</h3>

        {/* at some point will want to get the ruote from getStaicProps and just pass it along but for now this works*/}
        {articlesClean.map((name, i) => {
          return <A_li route={"/posts/articles/"} name={name} key={i} />;
        })}
        <h3>Photos</h3>
        {photosClean.map((name, i) => {
          return <A_li route={"/posts/photos/"} name={name} key={i} />;
        })}
        <h3>Songs</h3>
        {songsClean.map((name, i) => {
          return <A_li route={"/posts/songs/"} name={name} key={i} />;
        })}
      </ul>
      <a href="/">Home Page</a>
    </div>
  );
}

/*
I grab filenames from posts and clean them so they can be rendered in archived

should stick A_li in a sepreate file at some point
*/
