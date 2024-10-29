import { Header } from "::components/header"
import { Link } from "::components/link"
import { Mdx } from "::components/mdx"
import { Pic } from "::components/pic"
import { siteUrl } from "::lib/consts"
import { allBlogs } from "content-collections"
import { ArrowLeftToLineIcon } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { FC } from "react"

type PageProperties = {
	params: {
		slug: string
	}
}

export const generateMetadata = ({ params }: PageProperties): Metadata => {
	const currentPath = params.slug
	const page = allBlogs.find(({ slug }) => slug === currentPath)

	if (!page) {
		return {}
	}

	return {
		title: page.title,
		description: page.description,
		openGraph: page.image
			? {
					images: [
						{
							url: new URL(page.image, siteUrl).href,
							width: 1920,
							height: 1080,
							alt: page.title,
						},
					],
				}
			: undefined,
	}
}

export const generateStaticParams = (): PageProperties["params"][] =>
	allBlogs.map(page => ({
		slug: page.slug,
	}))

export default async function Page({ params }: PageProperties) {
	const currentPath = params.slug
	const page = allBlogs.find(({ slug }) => slug === currentPath)

	if (!page) {
		notFound()
	}

	return (
		<div className="">
			<div className=" ">
				{/* <div className="flex items-center gap-2 text-neutral-500 hover:text-orange-500 dark:text-neutral-400 dark:hover:text-orange-400">
					<ArrowLeftToLineIcon className="h-4 w-4 text-inherit" />
					<Link className="text-inherit text-sm no-underline hover:text-inherit" href="/blog">
						Back to blog
					</Link>
				</div> */}
				{page.image ? (
					<Pic
						src={page.image}
						alt=""
						className=" aspect-[21/9] lg:aspect-auto m-4 px-4 lg:px-0 mx-auto lg:m-0 h-full w-full object-top lg:object-center  overflow-hidden rounded lg:rounded-none object-cover"
					/>
				) : undefined}
				<div className="px-4 pt-16 pb-32 sm:pt-32">
					<div className="prose prose-neutral prose-orange dark:prose-invert w-full mx-auto space-y-12">
						<Header title={page.title} description={page.description} />
						<Mdx code={page.body} />

						<hr />
						<p className="text-sm">
							Published on {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(page.date)} •{" "}
							{page.readingTime}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
