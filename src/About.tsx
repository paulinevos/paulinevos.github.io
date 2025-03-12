import Headshot from "./assets/pauline_vos_thumbnail.png";

export default function About() {
    return (
    <>
        <div className="mx-auto max-w-2xl mb-20 lg:mx-0 col-span-2">
            <h2 className="underline underline-offset-20 decoration-40 decoration-red-100 text-3xl font-medium tracking-tight text-gray-900 sm:text-5xl">
                Hi, I'm Pauline
            </h2>
            <p className="mt-8 text-pretty text-lg font-light text-gray-700 sm:text-xl/8">
                I'm a software engineer and tech conference speaker based in Amsterdam. I work across the stack
                and a few different languages. My favorite is Rust, but PHP has my heart 4ever
                <span className="font-bold text-red-200"> &lt;3</span>.<br />
                I like contributing to open source and doing hacky stuff like CTFs.
            </p>
            <p className="mt-8 text-pretty text-lg font-light text-gray-700 sm:text-xl/8">
                Check out the online <a className="font-medium underline underline-offset-8 decoration-8 hover:decoration-20 decoration-red-100 text-gray-800"
                                        href="https://gitlegit.dev" target="_blank">Git course</a> I'm building!
                Or hire me to teach or facilitate for your team :)
            </p>
        </div>
        <div className="mx-auto px-auto flex items-center justify-center px-10 max-w-2xl lg:mx-0">
            <img src={Headshot} className="rounded-full min-w-60 h-60 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"  alt="Pauline Vos headshot"/>
        </div>
    </>)
}