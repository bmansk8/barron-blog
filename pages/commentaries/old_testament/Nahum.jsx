import Chapter1 from '../../../public/utilities/comentary_components/Nahum/chapter1'
import Chapter2 from '../../../public/utilities/comentary_components/Nahum/chapter2'
import Chapter3 from '../../../public/utilities/comentary_components/Nahum/chapter3'
import { useState } from 'react'

export default function Nahum(params) {
    const [chapter, updateChapter] = useState(1)

    return (
        <div className="commentary">
            <h1>Nahum</h1>
            <p className='quote'>
                In 612 BC the Assyrian Empire was nearing collapse. Its capital
                Nineveh was about to fall before a combined invasion of
                Babylonian, Medean and Scythian forces. But those living in the
                nations that Assyria had cruelly oppressed felt little pity. In
                their view, the Assyrians were simply getting a long-overdue
                taste of their own medicine. The prophet Nahum echoes these
                thoughts on behalf of the people of Judah. He situates this
                event within the context of God’s rule over all kingdoms on
                earth. God will judge the Assyrians, even though he had used
                them as his own instrument, because they were excessively
                destructive and proud…. -- NIV intro
            </p>
            <p className='quote'>
                <strong>Date of Writing:</strong> Given the limited amount of
                information that we know about Nahum, the best we can do is
                narrow the timeframe in which the Book of Nahum was written to
                between 663 and 612 B.C. Two events are mentioned that help us
                to determine these dates. First, Nahum mentions Thebes (No Amon)
                in Egypt falling to the Assyrians (663 B.C.) in the past tense,
                so it had already happened. Second, the remainder of Nahum’s
                prophecies came true in 612 B.C. -- Gotquestions.org
            </p>
            <p className='quote'>
                <strong>Purpose of Writing:</strong> Nahum did not write this
                book as a warning or “call to repentance” for the people of
                Nineveh. God had already sent them the prophet{' '}
                <a href="https://biblia.com/bible/esv/Jonah%20150">Jonah 150</a>{' '}
                years earlier with His promise of what would happen if they
                continued in their evil ways. The people at that time had
                repented but now lived just as bad if not worse than they did
                before. The Assyrians had become absolutely brutal in their
                conquests (hanging the bodies of their victims on poles and
                putting their skin on the walls of their tents among other
                atrocities). Now Nahum was telling the people of Judah to not
                despair because God had pronounced judgment and the Assyrians
                would soon be getting just what they deserved. --
                Gotquestions.org
            </p>
            <p>
                One added tidbit, I usually use the NIV as my default
                translation and point out when another version is used. This
                time around I will be using the NASB. No particular reason, I
                just want to keep my studies fresh.
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

            <h1>Conclusion</h1>
            <p>
                For the jews and for modern Christians this letter is a reminder
                that God’s justice always wins out. Even if we don’t see it in
                our lifetime, or if some bigger badder evil comes behind the one
                God just deposed. God can only tolerate sin for so long.
                Eventually everyone receives judgment. God's salvation is 100%
                and complete. He is not a God of half measures. The practical
                side for the jews is a little interesting because right after
                this Babylon comes. Yes Assyria is completely defeated and
                destroyed. But another enemy comes their way. Just like we as
                christians look for Christ's return, the jews also look toward
                that day of eternal judgment and salvation. We must be happy
                with the small victories, but always look toward the eternal
                one.
            </p>
        </div>
    )
}
