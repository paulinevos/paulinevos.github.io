function Links() {
    return (
        <div className="mx-auto mb-20 lg:mx-0">
            <div className="md:w-md mb-10">
                <h2 className="underline underline-offset-10 decoration-25 decoration-red-100 text-3xl font-medium tracking-tight text-gray-900 sm:text-2xl">
                    Links
                </h2>
                <p className="mt-3 text-pretty text-sm font-light text-gray-700">
                    These are some places I hang around. Feel free to reach out to me on any of these platforms.
                </p>
            </div>

            <Link to="https://bsky.app/profile/pauline-vos.nl" text="Bluesky"  description={null} />
            <Link to="https://git-legit.dev" text="Git Legit"  description="The online Git course I'm building." />
            <Link to="https://github.com/paulinevos" text="Github" description={null} />
            <Link to="https://www.linkedin.com/in/paulinepvos" text="LinkedIn" description={null} />
            <Link to="https://git-legit.dev" text="Sessionize" description="My speaker profile." />
            <Link to="https://joind.in/user/vanamerongen" text="JoindIn" description="My talks and ratings." />
            <Link to="https://dev.to/paulinevos" text="Dev.to" description="Some of my writing. If you were looking for these, they moved here." />

            <p className="mt-10 text-pretty text-sm font-light text-gray-700">
                And credits for my headshot go to Jagoda Lasota
            </p>
            <Link to="https://www.jagodalasota.com" text="Jagoda Lasota" description={null} />
        </div>
    )
}

function Link({to, text, description = null}: {to: string, text: string, description: string|null}) {
    return (
        <p className="pb-3">
            <div>
                <a
                    className="font-medium underline underline-offset-8 decoration-8 hover:decoration-20 decoration-red-100 text-gray-800"
                    href={to}
                    target='_blank'
                >
                    {text}
                </a>
            </div>
            { description && (
                <span className="text-xs text-gray-600">{description}</span>
            )}
        </p>
    )
}

export default Links