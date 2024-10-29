import { readFileSync } from "node:fs"
import { Link } from "::components/link"
import { Blockquote, Callout, img } from "::components/mdx"
import { Video } from "::components/video"
import withoutBody from "::nobody"
import { type RehypeCodeOptions, rehypeCode, remarkGfm, remarkHeading } from "fumadocs-core/mdx-plugins"
import type { MDXComponents } from "mdx/types"
import React, { type ComponentPropsWithoutRef } from "react"
import readingTime from "reading-time"

type HeadingProps = ComponentPropsWithoutRef<"h1">
type ParagraphProps = ComponentPropsWithoutRef<"p">
type ListProps = ComponentPropsWithoutRef<"ul">
type ListItemProps = ComponentPropsWithoutRef<"li">
type AnchorProps = ComponentPropsWithoutRef<"a">
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">

const components: MDXComponents = {
	h1: (props: HeadingProps) => <h1 className="font-medium pt-12 mb-0 fade-in" {...props} />,
	h2: (props: HeadingProps) => <h2 className="text-gray-800 font-medium mt-8 mb-3" {...props} />,
	h3: (props: HeadingProps) => <h3 className="text-gray-800 font-medium mt-8 mb-3" {...props} />,
	h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
	p: (props: ParagraphProps) => <p className="text-gray-800 leading-snug" {...props} />,
	ol: (props: ListProps) => <ol className="text-gray-800 list-decimal pl-5 space-y-2" {...props} />,
	ul: (props: ListProps) => <ul className="text-gray-800 list-disc pl-5 space-y-1" {...props} />,
	li: (props: ListItemProps) => <li className="pl-1" {...props} />,
	em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium" {...props} />,
	strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-medium" {...props} />,
	a: ({ href, children, ...props }: AnchorProps) => {
		const className = "text-orange-500 hover:text-orange-600"
		if (href?.startsWith("/")) {
			return (
				<Link href={href} className={className} {...props}>
					{children}
				</Link>
			)
		}
		if (href?.startsWith("#")) {
			return (
				<a href={href} className={className} {...props}>
					{children}
				</a>
			)
		}
		return (
			<a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
				{children}
			</a>
		)
	},
	img,
	/* 	Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
		<table>
			<thead>
				<tr>
					{data.headers.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.rows.map((row, index) => (
					<tr key={index}>
						{row.map((cell, cellIndex) => (
							<td key={cellIndex}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	), */
	blockquote: Blockquote,
	Callout,
	Video,
}

export function useMDXComponents(otherComponents: MDXComponents): MDXComponents {
	return {
		...otherComponents,
		...components,
	}
}
