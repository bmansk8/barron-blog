import Chapter1 from '../../../public/utilities/comentary_components/Malachi/chapter1'
import Chapter2 from '../../../public/utilities/comentary_components/Malachi/chapter2'
import Chapter3 from '../../../public/utilities/comentary_components/Malachi/chapter3'
import Chapter4 from '../../../public/utilities/comentary_components/Malachi/chapter4'
import { useState } from 'react'

export default function Joel(params) {
    const [chapter, updateChapter] = useState(1)

    return (
        <div className="commentary">
            <h1>Malachi</h1>

            <p>
                So this is the last of the minor prophets. It is 100 years after
                the exile. Written somewhere in the 4th century bc. It is
                structured as 6 main arguments. God stating something, Israel’s
                response, and God’s final say. Sadly the exile has not done much
                to get the jews back in line with God.
            </p>
            <p>
                All the restoration promised in the previous prophets has not
                happened exactly as previously assumed. Of course the jews of
                this time become frustrated. The book strongly points to Christ
                and by extension eternity as the true fulfilment of these
                promises. Of course later Christ comes, but not exactly like the
                jews were expecting. God’s plan is not always what we think it
                will be. Yet God does not abandon us. He is willing to converse
                with us and call us to trust his promises.
            </p>

            <div className="quote">
                <p>
                    The rebuilding of the temple under Zerubbabel and Joshua,
                    inspired by the prophecies of Haggai and Zechariah, was
                    completed in 516 BC. The new temple was meant to be the
                    centerpiece of a community in which there was true justice
                    and genuine worship. In this way Israel could fulfill its
                    calling and be a light, revealing God to the nations.
                    Unfortunately, as the years went by, the people fell further
                    and further away from this ideal. By the middle of the next
                    century, their worship had become corrupt, and their society
                    was plagued with injustice. Malachi (“my messenger”)
                    challenges the people to honor God properly in their worship
                    and in their dealings with one another. The world could then
                    come to know the Lordas the great king. - NIV intro
                </p>
            </div>

            <p>
                <a href="https://www.gotquestions.org/Book-of-Malachi.html">
                    Summary of the Book of Malachi - Bible Survey |
                    GotQuestions.org
                </a>
            </p>
            <p>
                <a href="https://www.youtube.com/watch?v=HPGShWZ4Jvk">
                    Overview: Malachia
                </a>
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
                <button type="button" onClick={() => updateChapter(4)}>
                    4
                </button>
            </div>

            {chapter == 1 && <Chapter1 />}
            {chapter == 2 && <Chapter2 />}
            {chapter == 3 && <Chapter3 />}
            {chapter == 4 && <Chapter4 />}

            <h2 id="conclusion">Conclusion</h2>
            <p>
                So this book is such an encouragement to me. It’s a call to
                stand firm in Christ, to look towards eternity, to always be
                cautious of straying away from God, and questioning is ok.
                Sometimes people in power are corrupt, the people around us are
                corrupt, and even our church leaders are corrupt. Yet God seems
                to be blessing them and not us. Sometimes we are the corrupt
                ones and don’t even know it. Yet God is always seeking that we
                return to him. Our hope is in what God has already done, and
                what he has promised he will do. And we trust in what he will do
                because of what he has already done.
            </p>
        </div>
    )
}
