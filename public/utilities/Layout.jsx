import { Children } from 'react'

import styles from '../css/navbar.module.scss'

export default function Layout({ children }) {
    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/archives">Archives</a>
                    </li>
                    <li>
                        <a href="https://distrokid.com/hyperfollow/barronbrock/a-wild-goose-chase">
                            E.P
                        </a>
                    </li>
                </ul>
            </nav>

            {children}
        </>
    )
}
