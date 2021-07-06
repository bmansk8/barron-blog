export default function Article_ArrayManipulation() {
    return (
        <div className="article">
            <link
                href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap"
                rel="stylesheet"
            />

            <h1>Array Manipulation</h1>

            <p>
                So I recently had a skill assessment for a job. There was a html
                section but the JS side is more interesting to me as that's
                something I tend to neglect. Yes I use React, Express, React
                Router, and all the other frameworks/tools on the JS side. But I
                find myself being more and more frontend focused every day. So
                high time I sharpened my JS skills!
            </p>
            <p>
                So first off, the array I'm manipulating. So this was for a Job
                so i won’t go into details since that would give the answers
                away but these are pretty general tasks. First off, make an
                array and make sure it’s constant. Do something like this.
            </p>

            <pre>
                <p>
                    {`let arr = [
  { group: '1', alias: 'a, b, c' },
  { group: '1', alias: 'a, b, c' },
  { group: '1', alias: 'a' },
  { group: '2', alias: 'a' },
  { group: '2', alias: 'a' },
]          
`}
                </p>
            </pre>

            <p>
                So I threw this in a <span className="inlineCode">.json</span>{' '}
                file. You can just import it into your JS file. Note everything
                being strings is important. My challenge did not use numbers but
                that just helps make it easier.
            </p>
            <p>
                So my first task was to get all the objects from group one. So I
                should return 3 objects. Now I tried doing it with a for loop
            </p>

            <p className="code">{`for (let i=0; i < arr.length: i++){ /*go through array and get what i need.*/ }`}</p>

            <p>
                But there is a better way!{' '}
                <span className="inlineCode">.filter()</span> oh my gosh YES!{' '}
                <span className="inlineCode">.filter()</span> makes life so easy
                and allows for less code than a for loop. Since our objects are
                in an array we can use this feature.
            </p>

            <p className="code">{`return arr.filter( (e) =>{ return e.group == '1'})`}</p>

            <p>
                Boom! Job done! Now there are two more to go. Next is storing
                the objs by group. Basically all group 1 objs in a obj and all
                group 2 objs in an object. Like this
            </p>

            <pre>
                <p>
{`let tempArr = {
  group1: [],
  group2: [],
}

tempArr['group1'] = arr.filter((e) => {
  return e.group == '1'
})
tempArr['group2'] = arr.filter((e) => {
  return e.group == '2'
})

return tempArr
`}
                </p>
            </pre>

            <p>
                Last but not least, all group 1 objs that have more than 1
                alias.
            </p>

            <pre>
                <p>
{`arr = arr.filter((e) => {
  return e.group == '1'
});
return (arr = arr.filter(({ alias }) => {
  return String(alias).match(/[,]/g)
}));
`}
                </p>
            </pre>

            <p>
                We filter all the group 1 objs so we are just working with
                those. Then using destructuring we grab the alias property and
                match it to a regex for a comma. Note the{' '}
                <span className="inlineCode">String(alias)</span> we have to
                specify we are checking string or{' '}
                <span className="inlineCode">.match()</span> won’t be a
                function. If you made your array like I did then a comma
                separates all the values. In the coding interview I did, it used
                first and last names, so I couldn't just check for spaces.
            </p>
            <p>
                So all in all, <span className="inlineCode">.filter()</span> is
                a super useful method we can call that really cuts down on the
                amount of code we write. Thanks{' '}
                <span className="inlineCode">.filter()</span>!
            </p>
        </div>
    )
}
