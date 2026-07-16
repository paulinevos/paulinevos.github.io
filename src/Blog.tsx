import { useEffect, useState } from "react";

type Article = {
    id: number,
    title: string,
    description: string,
    url: string,
    readable_publish_date: string,
    reading_time_minutes: number,
    tag_list: string[],
    cover_image: string | null,
}

const CACHE_KEY = 'devto-articles'
const CACHE_TTL = 60 * 60 * 1000 // 1 hour

type Cache = { fetchedAt: number, articles: Article[] }

function readCache(): Cache | null {
    try {
        const raw = localStorage.getItem(CACHE_KEY)
        return raw ? (JSON.parse(raw) as Cache) : null
    } catch {
        return null
    }
}

function writeCache(articles: Article[]) {
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), articles }))
    } catch {
        // storage full or unavailable — non-fatal, we just skip caching
    }
}

function Blog() {
    const cached = readCache()
    const [articles, setArticles] = useState<Article[]>(cached?.articles ?? [])
    const [status, setStatus] = useState<'loading' | 'error' | 'done'>(
        cached ? 'done' : 'loading'
    )

    useEffect(() => {
        // Fresh enough cache: render instantly and skip the network entirely.
        if (cached && Date.now() - cached.fetchedAt < CACHE_TTL) {
            return
        }

        // Otherwise fetch. If we have stale cache, this is a background
        // revalidation (status stays 'done' so the list never flickers).
        fetch('https://dev.to/api/articles?username=paulinevos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`dev.to responded with ${response.status}`)
                }
                return response.json()
            })
            .then((data: Article[]) => {
                setArticles(data)
                setStatus('done')
                writeCache(data)
            })
            .catch(() => {
                // Keep showing cached posts if we have them; only surface an
                // error when there's nothing to show.
                if (!cached) {
                    setStatus('error')
                }
            })
    }, [])

    return (
        <div className="mx-auto mb-20 lg:mx-0">
            <div className="md:w-md mb-10">
                <h2 className="underline underline-offset-10 decoration-25 decoration-red-100 text-3xl font-medium tracking-tight text-gray-900 sm:text-2xl">
                    Blog
                </h2>
                <p className="mt-3 text-pretty text-sm font-light text-gray-700">
                    I write about Git, software development, and whatever's on my mind at any given time.
                    All my writing lives on <a
                        className="underline underline-offset-4 decoration-red-100 hover:decoration-red-200"
                        href="https://dev.to/paulinevos"
                        target="_blank"
                    >dev.to</a>.
                </p>
            </div>

            { status === 'loading' && (
                <p className="text-sm font-light text-gray-700">Loading posts…</p>
            )}

            { status === 'error' && (
                <p className="text-sm font-light text-gray-700">
                    Couldn't load my posts right now. You can read them directly on <a
                        className="underline underline-offset-4 decoration-red-100"
                        href="https://dev.to/paulinevos"
                        target="_blank"
                    >dev.to</a>.
                </p>
            )}

            { status === 'done' && articles.map((article) => (
                <Post key={article.id} props={article} />
            ))}
        </div>
    )
}

function Post({ props }: { props: Article }) {
    const { title, description, url, readable_publish_date, reading_time_minutes, tag_list, cover_image } = props
    return (
        <div className="md:flex mx-auto mt-4 max-w-2xl py-3 px-6 border-1 border-gray-300">
            <div className="grow">
                <a
                    className="font-medium underline underline-offset-8 decoration-8 hover:decoration-20 decoration-red-100 text-gray-800 text-xl"
                    href={url}
                    target="_blank"
                >
                    {title}
                </a>
                <h4 className="italic text-xs text-gray-600 pt-2 pb-3">
                    { readable_publish_date } // { reading_time_minutes } min read
                </h4>
                <p className="font-light pb-3 text-sm text-gray-700">{description}</p>
                { tag_list.length > 0 && (
                    <p className="text-xs text-gray-600">
                        { tag_list.map((tag) => `#${tag}`).join(' ') }
                    </p>
                )}
            </div>
            { cover_image && (
                <a href={url} target="_blank" className="shrink-0 md:ml-5 order-first md:order-none mb-3 md:mb-0">
                    <img
                        className="w-full md:w-40 aspect-video object-cover"
                        src={cover_image}
                        alt={`Cover image for ${title}`}
                        loading="lazy"
                    />
                </a>
            )}
        </div>
    )
}

export default Blog
