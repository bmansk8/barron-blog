import Zephaniah1 from '../../../public/utilities/comentary_components/zephaniah/zephaniah1'
import Zephaniah2 from '../../../public/utilities/comentary_components/zephaniah/zephaniah2'
import Zephaniah3 from '../../../public/utilities/comentary_components/zephaniah/zephaniah3'
import { useState } from 'react'

export default function Zephaniah(params) {
    const [chapter, updateChapter] = useState(1)

    return (
        <div className="commentary">
            <h1>Zephaniah</h1>
            <p>
                The book of Zephaniah was written during the reign of King
                Josiah, likely in the early part of his reign, between 635 and
                625 BC. Judah is about to be destroyed, and the sack of
                Jerusalem is iminent. It is God proclaiming his judgment. The
                Babylonians are coming, and God is at the front. “The Lord of
                armies” as other prophets call him. As with all the prophets we
                still see a call to repent. God allows things to happen so we
                might be brought to repentance. To return to him. Just like a
                parent disciplining a child in the right way makes that child a
                better adult once it grows old.
            </p>
            <p>A note from gotquestions.org</p>
            <div className="quote">
                <p>
                    <strong>Foreshadowings</strong>: The final blessings on Zion
                    pronounced in 3:14-20 are largely unfulfilled, leading us to
                    conclude that these are messianic prophecies that await the{' '}
                    <a href="https://www.gotquestions.org/second-coming-Jesus-Christ.html">
                        Second Coming
                    </a>{' '}
                    of Christ to be completed. The Lord has taken away our
                    punishment only through Christ who came to die for the sins
                    of His people (
                    <a href="https://biblia.com/bible/esv/Zeph%203.15">
                        Zephaniah 3:15
                    </a>
                    ;{' '}
                    <a href="https://biblia.com/bible/esv/John%203.16">
                        John 3:16
                    </a>
                    ). But Israel has not yet recognized her true Savior. This
                    is yet to happen (
                    <a href="https://biblia.com/bible/esv/Rom%2011.25-27">
                        Romans 11:25-27
                    </a>
                    ).
                </p>
                <p>
                    The promise of peace and safety for Israel, a time when
                    their King is in their midst, will be fulfilled when Christ
                    returns to judge the world and redeem it for Himself. Just
                    as He ascended to heaven after His resurrection, so will He
                    return and set up a new Jerusalem on earth (
                    <a href="https://biblia.com/bible/esv/Rev%2021">
                        Revelation 21
                    </a>
                    ). At that time, all God’s promises to Israel will be
                    fulfilled.
                </p>
            </div>

            <p>
                <a href="https://www.gotquestions.org/Book-of-Zephaniah.html">
                    Summary of the Book of Zephaniah - Bible Survey |
                    GotQuestions.org
                </a>
            </p>
            <p>
                <a href="https://bibleproject.com/learn/zephaniah/">
                    The book of Zephaniah offers a picture of hope for God's
                    people. | BibleProject™
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
            </div>

            {chapter == 1 && <Zephaniah1 />}
            {chapter == 2 && <Zephaniah2 />}
            {chapter == 3 && <Zephaniah3 />}

            <h1>Conclusion</h1>
            <p>
                This book is a declaration of judgment. On Judah and its
                surrounding nations. God is working through Babylon and allowing
                this to happen. Of course as in all other books of the prophets
                repentance is always an option. God also assures those who are
                left behind that he will care for them. Those who don’t go to
                Babylon will not be forgotten. Eventually God’s final judgment
                will come and restoration will happen. That was the jews hope,
                and is still our hope today. When injustice is coming our way,
                when we see injustice, when we see unrepentance, we know God’s
                final judgment will make things right. It’s also a call to make
                sure we are right with God. Only through Christ can we have
                grace enough to save us from this judgment. As with all
                scripture, it is truly a blessing to the past, present, and
                future generations.
            </p>
        </div>
    )
}
