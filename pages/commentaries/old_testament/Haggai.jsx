import Chapter1 from '../../../public/utilities/comentary_components/Haggai/chapter1'
import Chapter2 from '../../../public/utilities/comentary_components/Haggai/chapter2'
import { useState } from 'react'

export default function Haggai() {
    const [chapter, updateChapter] = useState(1)

    return (
        <div className='commentary'>
            <h1>Haggai</h1>
            <p>
                So this book is for the jews that have returned to Israel from
                exile. We must remember that most of the jews stayed in persia.
                Only a small group returned. It was written in 520 B.C
            </p>
            <p>
                Chapter one is an initial call to do and be better. The people
                are focusing on themselves and their own houses. Chapter 2 is a
                month later, and 2:10-19 is two months later. We then get a
                brief closing.
            </p>
            <p>
                <a href="https://www.jewishvirtuallibrary.org/after-the-babylonian-exile">
                    The Jewish Temples: After the Babylonian Exile
                </a>
            </p>
            <p>
                <a href="https://bibleproject.com/learn/haggai/">
                    The book of Haggai offers hope for the people who have just
                    returned from exile. | BibleProject™
                </a>
            </p>
            <p>
                <a href="https://www.gotquestions.org/Book-of-Haggai.html">
                    Summary of the Book of Haggai - Bible Survey |
                    GotQuestions.org
                </a>
            </p>

            <div className="button_group">
                <button type="button" onClick={() => updateChapter(1)}>
                    1
                </button>
                <button type="button" onClick={() => updateChapter(2)}>
                    2
                </button>
            </div>

            {chapter == 1 && <Chapter1 />}
            {chapter == 2 && <Chapter2 />}

            <h1>Conclusion</h1>
            <p>
                So once again, a somewhat short book. This book really points to
                the importance of obedience as a Christian. It also gives us
                some welcomed context on the returning jews and how life was for
                them. The gritty reality that some amazing salvation was not in
                the cards. A triumphant takeover of persia and eternal
                liberation was not the plan. Yet even in that God was still
                working.
            </p>
        </div>
    )
}
