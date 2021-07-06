export default function Article_LessCss() {
    return (
        <div className="article">
        <link
                href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
                rel="stylesheet"
            />
            <h1>Less css!</h1>
            <p>
                So I said to myself one day that I wanted to use less. Only
                sass is supported by create-react app by default. So I took it
                upon myself to learn Less no matter what. In comes vanilla html
                using express to handle my routes and serve up the files. Now,
                you can use a link tag in your header but I wanted to install
                less via npm. Simply type
            </p>

            <p>
                <span className='terminal'>npm install less</span>
                {' '}or{' '}
                <span className='terminal'>npm install less -g</span>
            </p>

            <p>-g for global install. I chose the local option.</p>

            <p>
                So, Less has some really cool options and adds a lot to css. Now
                this used to be cool but, variables are available in less. Yes
                i’m aware css has these also but that used to not be the norm
                until around 2017 from my research. Also, from what I found
                online, preprocessor variables have some limitations
            </p>

            <ol type="I">
                <li>you cannot change them dynamically.</li>
                <li>they are not aware of the DOM’s structure.</li>
                <li>they cannot be read or changed from JavaScript.</li>
            </ol>

            <p>So how do less vars work? Like this,</p>

            <p className='code'> @primary: red; </p>

            <p>Then in a selector you go</p>

            <p className='code'> p &#123;color: @primary;&#125; </p>

            <p>Another cool feature is mixins. Less mixins work like this</p>

            <p className='code'>.img&#123; width:300px; height:300px; &#125;</p>

            <p>Then we can use those styles in another selector.</p>

            <p className='code'>p&#123; .img(); &#125;</p>

            <p>
                And the main reason I got into a css preprocessor was nesting
                selectors
            </p>

            <p className='code'> div &#123; p &#123; color:blue; &#125; &#125;</p>

            <p>
                I talk about this in the first blog post. Simply scroll down to
                see more about that.
            </p>

            <p>
                So, those are just a few cool things in less. There are a lot
                more so here is a list of some I used in my less learning
                playground{' '}
            </p>

            <ol type="I">
                <li>Custom selectors</li>
                <li>
                    Maps{' '}
                    <i>(Go to the less website. These are super awesome)</i>
                </li>
                <li>Css guards</li>
            </ol>

            <p>
                And even more on the less docs page! Here are some links to
                check out on your journey to becoming a less master.{' '}
            </p>

            <ul>
                <li>
                    <a className='links' href="http://lesscss.org/">Less website</a>
                </li>
                <li>
                    <a className='links' href="https://gist.github.com/bmansk8/e092ede9395fc421d59311bc96507415">
                        My gist for Less
                    </a>{' '}
                    (just css)
                </li>
                <li>
                    <a className='links' href="https://github.com/bmansk8/learning-Less">
                        My Less repo.
                    </a>{' '}
                    Feel free to clone
                </li>
                <li>
                    A great{' '}
                    <a className='links' href="https://www.youtube.com/watch?v=lJclQekSfSM">
                        video
                    </a>{' '}
                    on using pre processors
                </li>
            </ul>
        </div>
    )
}