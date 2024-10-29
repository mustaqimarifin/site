import { MDXContent, useMDXComponent } from "@content-collections/mdx/react"
import Image from "next/image"
import type { ComponentPropsWithoutRef, FC, HTMLProps, ReactNode } from "react"
import { Link } from "./link"
import { Pic } from "./pic"
import { Video } from "./video"

type MdxProperties = {
	readonly code: string
}

const a: FC<HTMLProps<HTMLAnchorElement>> = ({ href, ...properties }) => {
	if (typeof href !== "string") {
		throw new TypeError("href is required")
	}

	return (
		<a
			{...properties}
			href={href}
			target={href.startsWith("http") ? "_blank" : undefined}
			rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
		/>
	)
}

export const img: FC<HTMLProps<HTMLImageElement>> = properties => {
	const { src, alt, width, height } = properties
	const path = require(`../public${src}`)
	const img = src?.startsWith("http") ? src : path
	return (
		<Image
			src={img!}
			alt={alt || ""}
			width={1240}
			height={698}
			placeholder="blur"
			unoptimized={src?.startsWith("http")}
			className="overflow-hidden rounded"
			quality={100}
		/>
	)
}
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">

export const Blockquote = (props: BlockquoteProps) => {
	return (
		<blockquote
			className="ml-[0.075em] border-l-2 font-itl text-balance leading-loose border-gray-300 pl-4 text-gray-700 dark:text-gray-200"
			{...props}
		/>
	)
}

export const Callout: FC<{ readonly children: ReactNode }> = ({ children }) => (
	<div className="overflow-hidden rounded-lg bg-gradient-to-tr from-white/0 to-white/20 p-px">
		<div className="rounded-[7px] bg-gradient-to-tr from-black to-neutral-950 p-6">{children}</div>
	</div>
)

export const Mdx: FC<MdxProperties> = ({ code }) => {
	return (
		<MDXContent
			code={code}
			components={{
				a: Link,
				blockquote: (props: BlockquoteProps) => (
					<blockquote
						className="ml-[0.075em] border-l-2 font-itl text-balance leading-loose border-gray-300 pl-4 text-gray-700 dark:text-gray-200"
						{...props}
					/>
				),
				img,
				Video,
				Callout,
			}}
		/>
	)
}
