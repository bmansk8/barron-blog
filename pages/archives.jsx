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
    const directories = [
        '/articles/general',
        '/articles/programming',
        '/photos',
        '/songs',
    ]
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
                .replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase())
                .trim()
            return obj
        })
        /* 
        so the first .replace gits rid of the .jsx file exstention.
        then I remove song article and photo from the name.
        then add a space before every capital letter because they are all camel case.
        then take the fisrt character and uppercase it. 
         */
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
                <ul>
                    <h4>General</h4>
                    {cleanNames[0].map((i) => {
                        return (
                            <A_li
                                route={'/posts/articles/general/' + i.route}
                                name={i.name}
                                key={i}
                            />
                        )
                    })}
                    <h4>Programming</h4>
                    {cleanNames[1].map((i) => {
                        return (
                            <A_li
                                route={'/posts/articles/programming/' + i.route}
                                name={i.name}
                                key={i}
                            />
                        )
                    })}
                </ul>

                <h3>Photos</h3>
                {cleanNames[2].map((i) => {
                    return (
                        <A_li
                            route={'/posts/photos/' + i.route}
                            name={i.name}
                            key={i}
                        />
                    )
                })}
                <h3>Songs</h3>
                {cleanNames[3].map((i) => {
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
