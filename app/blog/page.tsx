import { Header } from "::components/header"
import { Link } from "::components/link"
import blogSchema from "::data/schema.json"
//import { allBlogs } from "content-collections"
import type { Metadata } from "next"
import type { FC } from "react"
const title = "Blog"
const description = "Thoughts, ideas, and opinions."

export const revalidate = 0

export const metadata: Metadata = {
	title,
	description,
}

const formatBlogDate = (date: string) =>
	new Intl.DateTimeFormat("en-US", {
		month: "2-digit",
		year: "2-digit",
	}).format(new Date(date))

const Post: FC<{
	readonly title: string
	readonly date: string
	readonly slug: string
}> = ({ title: postTitle, date, slug }) => (
	<Link
		className="group flex flex-col gap-1 font-normal text-inherit no-underline transition-colors sm:flex-row sm:items-center sm:gap-4 sm:truncate"
		key={slug}
		href={`/blog/${slug}`}
	>
		<p className="m-0 font-medium text-neutral-950 transition-colors group-hover:text-orange-500 sm:truncate dark:text-white">
			{postTitle}
		</p>
		<hr className="m-0 hidden min-w-7 flex-1 transition-colors group-hover:border-orange-400 sm:block" />
		<p className="m-0 shrink-0 text-sm transition-colors group-hover:text-orange-400">{formatBlogDate(date)}</p>
	</Link>
)

const Blog = async () => {
	return (
		<div className="px-4 pt-16 pb-32 sm:pt-32 prose prose-neutral prose-orange dark:prose-invert mx-auto space-y-12">
			<Header title={title} description={description} />
			<div className="mt-8 grid gap-4">
				{blogSchema
					.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
					.map(post => (
						<Post key={post.slug} title={post.title} date={post.date} slug={post.slug} />
					))}
			</div>
		</div>
	)
}

export default Blog
