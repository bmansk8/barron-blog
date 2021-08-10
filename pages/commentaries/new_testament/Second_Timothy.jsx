import Chapter1 from '../../../public/utilities/comentary_components/Second_Timothy/chapter1'
import Chapter2 from '../../../public/utilities/comentary_components/Second_Timothy/chapter2'
import Chapter3 from '../../../public/utilities/comentary_components/Second_Timothy/chapter3'
import Chapter4 from '../../../public/utilities/comentary_components/Second_Timothy/chapter4'
import { useState } from 'react'

export default function Second_Timothy(params) {
    const [chapter, updateChapter] = useState(1)

    return (
        <div className="commentary">
            <h1>2 Timothy</h1>
            <p>
                So this is Paul's final letter. This is his second imprisonment
                and he is pretty sure death is near. He is writing to Timothy
                who is in charge of the church in Ephesus. He wants Timothy to
                come to him in Rome so Paul might encourage him and teach him
                how to deal with the issues in Ephesus.
            </p>
            <p>
                The book is written in A.D 67 right before Paul's beheading.
                Once again like most latter letters false teachers are springing
                up everywhere. This must have been rampant as Paul, John, Jude,
                and Peter all tackle this subject in their letters.
            </p>

            <div className="quote">
                <p>
                    <em>
                        “ Paul left his co-worker Timothy in the city of Ephesus
                        to deal with some renegade leaders in the church there.
                        When Timothy struggled, however, Paul went back to
                        Ephesus. Once there, Paul suffered a great deal of harm
                        from Alexander, one of these leaders, and he was once
                        again imprisoned and taken to Rome. He expected that
                        this time he would be tried and executed. Paul wrote to
                        Timothy to ask him to come to Rome quickly. “ NIV -
                        Intro
                    </em>
                </p>
            </div>
            <p>
                <a href="https://www.gotquestions.org/Book-of-2-Timothy.html">
                    Summary of the Book of 2 Timothy - Bible Survey |
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

            <h1>Conclusion</h1>
            <p>
                In conclusion, We see Paul writing a letter to someone he dearly
                loves. Someone he considers his own son. He wants to encourage
                and help him as much as he can before he dies. We also see the
                harsh reality of living a radical life for Christ. Sometimes it
                ends with being alone, cold, hungry, and awaiting death. Having
                all your friends abandon you. People betraying you. Not even
                having a coat to keep warm. Yet Paul lets us know this is all a
                part of following Christ. Also that it is worth it! Our rewards
                in heaven far outweigh any of the hardships here on earth. Being
                able to be with God for eternity is an unfathomably great
                reward.
            </p>
            <p>
                Most people would tell you Following God is great and easy and
                fun. Sometimes it can be, but sometimes it ends badly. Acts'
                ending is so abrupt I believe because of how bad, by a worldly
                standard, Paul's story ends. Yet in all of this Paul calls on
                Timothy to continue the faith even in the face of such hardship.
                Paul is right in warning him. Nero’s persecution is immense.
                Burning chrisitans alive in his palace as torches. Crucifixion
                of believers like Peter. Later Domintian, Trajan, Marcus
                Aurelius, Septimius Severus, Decius, Valerian, and Diocletian
                all persecuted Christians. Almost 300 years of persecution
                awaited the christians when Paul wrote this letter. Yet strong
                Christians like Paul and Timothy kept the faith. That is how we
                now can also believe in Christ today. Because men like this
                never stopped professing the good news of Christ.
            </p>
            <p>
                This letter is an amazing encouragement to any believer facing
                hardship. It is a great reminder of the importance of the bible.
                It is also a stark reminder to focus on eternity and not this
                world. Your ending in this world might be awful, but eternity
                with God is the best reward one could ever receive.
            </p>
            <p>
                <a href="https://christianhistoryinstitute.org/magazine/article/persecution-in-early-church-gallery">
                    Persecution in the Early Church: A Gallery of the
                    Persecuting Emperors | Christian History Magazine
                </a>
            </p>
        </div>
    )
}
