function Talks() {
    return (
        <div className="mx-auto mb-20 lg:mx-0">
            <div className="md:w-md mb-10">
                <h2 className="underline underline-offset-10 decoration-25 decoration-red-100 text-3xl font-medium tracking-tight text-gray-900 sm:text-2xl">
                    Talks
                </h2>
                <p className="mt-3 text-pretty text-sm font-light text-gray-700">
                    I love speaking at conferences around the world and connecting with the global developer community.
                    I'm most known for my in-depth Git talks that lay out best practices and go into little known and
                    underrated features. But I love doing a good keynote with inspiring storytelling too!
                </p>
                <p className="mt-2 text-pretty text-sm font-light text-gray-700">
                    Please enjoy a selection of my talks, kindly recorded and made public by the conferences who invited me.
                </p>
            </div>


            <Talk props={ {
                title: 'The Business of Bisecting',
                embed:'uzog0BTLrYY',
                conference: 'PHPUK, London, UK',
                date: new Date('02-16-2024'),
                description: "I've been teaching Git for years, and everywhere I go `git bisect` seems to be a bit of a mythical beast. Some people have heard of it, very few know what it is, and almost nobody knows how powerful it can really be.<br />In this talk, you'll find out not only what bisect is and how it works, but also all the ways in which it can work for you. From finding a specific point in your history lightning fast, to making it debug for you using a combination of bisect and regression testing."
            }} />

            <Talk props={ {
                title: 'The Bright and Exciting Future of the Decentralized Web',
                embed: 'dpkFCdy6sPU',
                conference: 'API Platform Con, Lille, FR',
                date: new Date('09-01-2023'),
                description: "<strong>Reader, be aware: this is not a blockchain talk!</strong> The web we knew and loved has become a massive machine led by a small number of tech giants, controlling your data, hogging money, and burning the planet. Tech thought leaders and pioneers recognize the state of the current web for what it is: unsustainable.<br />Find out in this talk which inspiring technologies lie ahead for us, that will help us take back control of our beloved web."
            }} />

            <Talk props={ {
                title: 'Never stop learning, or how curiosity and cross pollination drives innovation',
                embed: 'EV8Zj18DsTk',
                conference: 'PHPUK, London, UK',
                date: new Date('09-01-2022'),
                description: "Software developers all know: continual learning is part of the job. And that's what so many of us love about it. Innovation is constant, and it's an exciting challenge to keep up with so many new technologies. But where do all these new concepts, frameworks, and patterns come from?<br />Let’s take a journey through the history of innovation to explore how different worlds collided to inspire new, radical ideas. Let’s discover how cross-pollination has helped our community grow into what it is now, and can help us think of new ways to solve complex problems.<br />Join us for a session of inspirational stories that illustrate how cross-pollination has helped form some of history’s most profound innovations, and will hopefully inspire you to conjure up your own radical new ideas."
            }} />

            <Talk props={ {
                title: 'Advanced Git Magic',
                embed: 'x5Ib33eUUvo',
                conference: 'ForumPHP, Paris, FR',
                date: new Date('09-01-2021'),
                description: "You've learned about atomic commits, rebasing, you're keeping your history clean... but now what? When does all the good stuff happen? When are you awarded for your good Git behavior? Join me in this talk to learn about some advanced Git tricks that has saved my proverbial butt more than once, and I'm sure it will do the same for you! Go anywhere in your history, fix rebase screw-ups you thought were permanent, and find out about the magic of combining bisect with regression tests to fix surprise bugs ⚡lightning⚡ fast."
            }} />

            <Talk props={ {
                title: 'Git Legit',
                embed: '_e5oq4JT4_8',
                conference: 'Scotland PHP, Edinburgh, UK',
                date: new Date('01-01-2018'),
                description: "Many Git users tend to use Git as a save point, like in a video game; chronologically making checkpoint commits as they go. This spreads out changes to the same areas in the code over several commits, necessitates merging and resolving conflicts, and generally just making an incomprehensible jumble of your history. <br />This talk makes a case for atomic commits and how to use them while only minimally affecting your workflow. You’ll learn how to properly interactively rebase, fix up, reset, bisect, and more. By the end of the talk, you’ll have seen how this Git flow will make your life easier and how it will affect your ability to cherry pick, drop unwanted commits, and most importantly: not spend hours resolving conflicts in rebase hell. A little change in habits can go a very long way!"
            }} />
        </div>
    )
}

function Talk ({props}: { props: {
        title: string,
        conference: string,
        date: Date,
        description: string,
        embed: string,
    }
}) {
    const { title, conference, date, description, embed } = props
    return (
        <>
            <div className="md:flex mx-auto mt-4 max-w-7xl py-3 px-6 border-1 border-gray-300">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="underline underline-offset-10 decoration-25 decoration-red-100 text-xl mt-5 font-medium tracking-tight text-gray-900">
                        {title}
                    </h2>
                    <h4 className="italic text-xs text-gray-600 pb-5">
                        { conference } // { date.getFullYear() }
                    </h4>
                    <p className="font-light pb-3 md:pr-15 text-sm text-gray-700" dangerouslySetInnerHTML={{__html: description}} />
                </div>
                <div className="mx-auto pt-5 max-w-2xl lg:mx-0">
                    <iframe
                        className="aspect-video w-sm max-w-full"
                        title={`${title} by Pauline Vos on YouTube`}
                        frameBorder="0"
                        src={`https://www.youtube.com/embed/${embed}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
            </div>
        </>

    )
}

export default Talks