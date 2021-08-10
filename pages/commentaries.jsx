import fs from 'fs'
import A_li from '../public/utilities/A_li'

export async function getStaticProps() {
    const directories = [
        '/old_testament',
        '/new_testament',
    ]
    const cleanNames = []

    directories.forEach((i) => {
        let temp = fs.readdirSync('./pages/commentaries' + i).map((i) => {
            let obj = {
                name: '',
                route: '',
            }
            obj.route = i.replace(/\.jsx$/, '')
            obj.name = i
                .replace(/\.jsx$/, '')
                .replace(/_/, ' ')
                .trim()
            return obj
        })
        cleanNames.push(temp)
    })

    return { props: { cleanNames } }

    /*
    this is mostly recycled from  the archives.jsx file. 
    for some reason sepperating this out in a seperate .jsx file in /utilities was way more trouble than it was worth
    just sticking it here until i find a better option
    */
}

export default function commentaries({ cleanNames }) {
    return (
        <div className="commentaries">

            <div id='header'>
                <h1>Commentaries</h1>

                <p>
                    Ah, so you have come to my commentaries. I use that term
                    very loosely. While I am “commenting” on the bible and what
                    I think it means, it is important to remember it’s{' '}
                    <em>what I think.</em> My level of theological training is
                    no better than that of the average Christian who reads the
                    bible daily. I also have done these over the course of a
                    year (maybe more by the time the whole bible is complete)
                    and in that time I have only gone back and revised one book.
                    My understanding grows as I complete more books. I assure
                    you, you will find some flaws (typo’s or theologically). I
                    think it will be helpful if you think of them as simple
                    nudges in a direction. Whether my conclusion makes sense to
                    you or not it should cause you to think. Prove me wrong, and
                    find the evidence for yourself.
                </p>
                <p>
                    So why do this at all? Well I got into the habit because I
                    used to help with a high school small group. We had started
                    going through verse by verse and so I was getting in the
                    habit of writing out my thoughts on the text in a
                    readable-teachable way. I then found even after no longer
                    helping with that group, I continued to study every morning
                    like that. I now find myself several books deep and have
                    recently felt led to throw them out on the web.
                </p>
                <p>
                    So how should you read these? Well think of it this way.
                    These are a 20 somethings perspective on the bible, and what
                    interests him. What theological issues have I come upon. Are
                    these absolutely 100 theologically sound, probably not. But
                    if you are somewhat new to the faith, or recently found your
                    faith for yourself (like I did when starting this) then
                    maybe give it a go. Eat the meat and leave the bones as
                    someone wise once told me. If you get something out of it,
                    hurray! If not, that’s ok too.
                </p>
            </div>

            <div id="common questions">
                <h2>Common questions</h2>

                <ol>
                    <li>
                        What denomination am I?
                        <p>
                            So I really prefer not to say. I don’t want that to
                            color your view of my notes. People from all
                            denominations have good things to add. I would
                            rather you see my heart for God in my work than in
                            my denomination. I come from a varied background
                            including, calvary chapel, methodist, church of
                            christ, church of God, non-denominational,
                            pentecostal, and calvinism. So being around all
                            these growing up I found selling out to one in
                            particular was not my thing. I would simply call
                            myself a Christ follower.
                        </p>
                    </li>
                    <li>
                        Am I going to school for this?
                        <p>
                            As of right now, no. I studied to be a programmer
                            and intend on making that my career. I do play on
                            the worship team with my church and have been
                            involved in youth ministry in the past, but I’m no
                            different than any other christian who studies the
                            word.
                        </p>
                    </li>
                    <li>
                        How much time do I spend on these?
                        <p>
                            About 1-2 hours every day. While the amount of days
                            changes, the time per day is usually the same. The
                            amount of days for philemon vs something like John’s
                            gospel is a lot.
                        </p>
                    </li>
                    <li>
                        What resources do I use?
                        <p>
                            I use the bible app on my pc along with writing
                            everything in google docs. Some others I use are{' '}
                            <a href="https://www.biblegateway.com/">
                                biblegateway.com
                            </a>
                            ,{' '}
                            <a href="https://enduringword.com/">
                                enduringword.com
                            </a>
                            ,{' '}
                            <a href="https://www.gotquestions.org/">
                                gotquestions.org
                            </a>
                            , <a href="https://biblehub.com/">biblehub.com</a>,
                            and the{' '}
                            <a href="https://www.bemadiscipleship.com/">
                                bema discipleship podcast
                            </a>
                            .
                        </p>
                    </li>
                    <li>
                        Will I ever revise these?
                        <p>
                            I have only revised one book so far so I don’t
                            usually go back and edit them. I may in the future,
                            but my studies have not brought me back around to
                            it. I don’t intend on releasing these to the wider
                            world either. I have quoted a few different sources
                            and getting the rights to those along with all the
                            revisions I would have to make so as to not cause
                            many to stumble seems a little daunting right now.
                            So maybe, but not right now.
                        </p>
                    </li>
                </ol>
            </div>

            <h2>Commentaries</h2>
            <ul>
                <h3>Old Testament</h3>
                {cleanNames[0].map((i) => {
                    return (
                        <A_li
                            route={'/commentaries/old_testament/' + i.route}
                            name={i.name}
                            key={i.name}
                        />
                    )
                })}
                <h3>New Testament</h3>
                {cleanNames[1].map((i) => {
                    return (
                        <A_li
                            route={'/commentaries/new_testament/' + i.route}
                            name={i.name}
                            key={i.name}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

