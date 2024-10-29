import withoutBody from "::nobody"
import { type Context, type Document, defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import { type RehypeCodeOptions, rehypeCode, remarkGfm, remarkHeading } from "fumadocs-core/mdx-plugins"
import readingTime from "reading-time"

const myTheme = JSON.parse(readFileSync("data/x.json", "utf8"))

const rehypeCodeOptions: RehypeCodeOptions = {
	themes: {
		light: "tokyo-night",
		dark: myTheme,
	},
}

import { exec as cpExec } from "node:child_process"
import { readFileSync } from "node:fs"
import path from "node:path"
import { promisify } from "node:util"
const exec = promisify(cpExec)

async function lastModificationDate(ctx: Context, document: Document) {
	return ctx.cache(
		// TODO: this is a dirty hack to avoid cache key conflicts
		// we should find a way which handles this automatically
		{ key: "_git_last_modified", ...document },
		async document => {
			const filePath = path.join(ctx.collection.directory, document._meta.filePath)

			const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`)
			if (stdout) {
				return new Date(stdout.trim()).toISOString()
			}
			return new Date().toISOString()
		},
	)
}

const blogs = defineCollection({
	name: "blog",
	directory: "blog",
	include: "**/*.mdx",
	schema: z => ({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		image: z.string().optional(),
	}),
	transform: async (page, ctx) => {
		const body = await compileMDX(ctx, page, {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [[rehypeCode, rehypeCodeOptions], remarkHeading],
		})

		return {
			...page,
			date: new Date(page.date),
			body,
			slug: page._meta.path,
			readingTime: readingTime(page.content).text,
			lastModified: await lastModificationDate(ctx, page),
		}
	},
	onSuccess: async allNotes => {
		console.log("schema done!")
		await withoutBody(allNotes)
	},
})

export default defineConfig({
	collections: [blogs],
})
