import Chapter1 from '../../../public/utilities/comentary_components/joel/chapter1'
import Chapter2 from '../../../public/utilities/comentary_components/joel/chapter2'
import Chapter3 from '../../../public/utilities/comentary_components/joel/chapter3'
import { useState } from 'react'

export default function Joel(params) {
    const [chapter, updateChapter] = useState(1)

    return (
        <div className="commentary">
            <h1>Joel</h1>

            <div className="quote">
                <p>
                    The exact date of the book of Joel is difficult to know,
                    since it does not refer to the reign of any particular king.
                    The specific occasion of the book, however, is very clear
                    and Joel uses this occasion to deliver a powerful spiritual
                    message. - NIV intro
                </p>
            </div>

            <p>
                So Got questions puts it anywhere from 835 to 800 B.C this is
                before Israel was invaded by Assyria. Enduring Word also goes
                with this idea. Wiki list 5 ideas.
            </p>
            <ol>
                <li>
                    Ninth century B.C during Joash reign. This would mean one of
                    the first
                </li>
                prophets.
                <li>
                    Early 8th century during Uzziah, up there with Hosea Amos
                    and Jonah.
                </li>
                <li>
                    630-587 B.C before Juhdah was taken out, Jeremiah Ezekiel,
                    Habakkuk.
                </li>
                <li>
                    520-500 B.C during the persian period, thus making him one
                    of the last prophets.
                </li>
            </ol>
            <p>
                <a href="https://en.wikipedia.org/wiki/Book_of_Joel">
                    Book of Joel
                </a>
            </p>
            <p>
                <a href="https://www.gotquestions.org/Book-of-Joel.html">
                    Summary of the Book of Joel - Bible Survey |
                    GotQuestions.org
                </a>
            </p>
            <p>
                Enduring Word also opens with their take on the date of
                authorship{' '}
                <a href="https://enduringword.com/bible-commentary/joel-1/">
                    here
                </a>
            </p>
            <p>
                To put it lightly, there is massive debate on its time of
                writing. One of the most hotly debated topics in the realm of
                scholars. Joel to me seems to make a point of not identifying
                his time period. This is something I will reflect on in my look
                through the book. That this is a universal truth that is always
                applicable.
            </p>

            <div className="button_group">
                <button type="button" onClick={() => updateChapter(1)}>
                    1
                </button>
                <button type="button" onClick={() => updateChapter(2)}>
                    2
                </button>
                <button type="button" onClick={() => updateChapter(3)}>
                    3
                </button>
            </div>

            {chapter == 1 && <Chapter1 />}
            {chapter == 2 && <Chapter2 />}
            {chapter == 3 && <Chapter3 />}

            <h2 id="conclusion">Conclusion</h2>
            <p>
                So this might be the most interesting book I have done yet.
                Because of all the controversy I have avoided leaning on the
                time period or historical context. It has led me to think about
                the jewish and Christian take away. To find the take away in any
                time period. The fact that this is possible shows the living
                breathing word in action. That no matter the time period it is
                relevant. An ancient jew, modern jew, or modern Christain can
                all get something from this text.
            </p>
            <p>
                We see that God’s judgment is a corrective tool. It sometimes
                must be used because we refuse to do God's will and repent. But
                in that eternal justice is always on the horizon. Also if
                repentance is achieved, then blessings are waiting for us. God
                will avenge all the suffering we face in this life. All the
                persecution and judgment and hate we face will be addressed on
                judgment day. This is also a great reminder we must be right
                before God or the same fate awaits us. As a Christian it makes
                the blessing of Christ all the sweeter.
            </p>
            <p>Truly a blessing to read.</p>
        </div>
    )
}
