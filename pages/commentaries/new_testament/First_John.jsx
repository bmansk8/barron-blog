import Chapter1 from '../../../public/utilities/comentary_components/First_John/chapter1'
import Chapter2 from '../../../public/utilities/comentary_components/First_John/chapter2'
import Chapter3 from '../../../public/utilities/comentary_components/First_John/chapter3'
import Chapter4 from '../../../public/utilities/comentary_components/First_John/chapter4'
import Chapter5 from '../../../public/utilities/comentary_components/First_John/chapter5'
import { useState } from 'react'

export default function First_John(params) {
    const [chapter, updateChapter] = useState(1)

    return (
        <div className="commentary">
            <h1>First John</h1>
            <p>
                <a href="https://www.gotquestions.org/Book-of-1-John.html">
                    Summary of the Book of 1 John - Bible Survey |
                    GotQuestions.org
                </a>
            </p>

            <div className="quote">
                <p>
                    Someone who was close to this community and who had been an
                    eyewitness of Jesus wrote to reassure them of what they had
                    heard from the beginning.The author doesn’t identify
                    himself, but very likely he was the apostle John. Much of
                    the language is similar to the Gospel of John. The letter
                    testifies to the reality of the Messiah’s coming in the
                    flesh, reassuring the believers that they have full access
                    to the truth. It emphasizes godly living and practical
                    caring as the signs of those who genuinely know God. - NIV
                    intro
                </p>
            </div>

            <p>
                The letter known as 1 John was sent to a group of believers who
                were in the midst of an unsettling situation. Some of them had
                abandoned faith in Jesus the Messiah as it had first been taught
                to them. They found the proclamation that God had come in a
                human body impossible to reconcile with the common Greek idea
                that the flesh is evil and only spirit is good. But despite
                their denial of the Messiah, their immoral lives and their lack
                of practical love, they claimed to know God and belong to God.
                They asserted that their spiritual insight put them above the
                rest of the group, which they demonstrated by deserting the
                fellowship. Those left behind were deeply shaken, uncertain
                about everything they had been taught.
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
                <button type="button" onClick={() => updateChapter(5)}>
                    5
                </button>
            </div>

            {chapter == 1 && <Chapter1 />}
            {chapter == 2 && <Chapter2 />}
            {chapter == 3 && <Chapter3 />}
            {chapter == 4 && <Chapter4 />}
            {chapter == 5 && <Chapter5 />}

            <h1>Conclusion</h1>
            <p>
                So John skillfully hits several teachings in his early chapters
                of this letter. He references things from his own gospel, James,
                Paul, and Jesus teachings from the gospels. He also pushes the
                idea of loving one another and of victory over sin. We see that
                some people left the church and denied Christ (2:18-23) so John
                is assuring them of their faith, their ability to defeat sin,
                and that loving one another is the christian way. He talks about
                how we can know the spirit is trustworthy. We know
                everything John is saying is more true than these false
                teachers. John defends Christ, the holy spirit, and God so these
                believers know what they believe is true. They also can test any
                future false teachings in this same way. Truly a great book to
                see a more basic view of lots of new testament teachings. Also a
                strong encouragement to believers struggling with sin, or
                keeping the faith.
            </p>
        </div>
    )
}
