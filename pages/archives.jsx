import fs from 'fs'
import A_li from '../public/utilities/A_li'

export async function getStaticProps() {
    /*
  arr[0] is articles
  arr[1] is photos
  arr[2] is songs

  [
    [{name, route},{name, route},{name, route} ect...]
    [{name, route},{name, route},{name, route}]
    [{name, route},{name, route},{name, route}] ect...
  ]

  */
    const directories = ['/articles', '/photos', '/songs']
    const cleanNames = []

    directories.forEach((i) => {
        let temp = fs.readdirSync('./pages/posts' + i).map((i) => {
            let obj = {
                name: '',
                route: '',
            }
            obj.route = i.replace(/\.jsx$/, '')
            obj.name = i
                .replace(/\.jsx$/, '')
                .replace(/song_/, '')
                .replace(/article_/, '')
                .replace(/photo_/, '')
                .replace(/([A-Z])/g, ' $1')
                .trim()
            return obj
        })
        cleanNames.push(temp)
    })

    return { props: { cleanNames } }
}

export default function archived({ cleanNames }) {
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
                {cleanNames[0].map((i) => {
                    return (
                        <A_li
                            route={'/posts/articles/' + i.route}
                            name={i.name}
                            key={i}
                        />
                    )
                })}
                <h3>Photos</h3>
                {cleanNames[1].map((i) => {
                    return (
                        <A_li
                            route={'/posts/photos/' + i.route}
                            name={i.name}
                            key={i}
                        />
                    )
                })}
                <h3>Songs</h3>
                {cleanNames[2].map((i) => {
                    return (
                        <A_li
                            route={'/posts/songs/' + i.route}
                            name={i.name}
                            key={i}
                        />
                    )
                })}
            </ul>
            <a href="/">Home Page</a>
        </div>
    )
}
/*
I grab filenames from /posts and remove the jsx extension [0] is articles [1] is photos [2] is songs

I then map through each array and pass the props to A_li and that returns the li tags with the a tags nested inside
*/
