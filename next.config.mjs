import { readFileSync } from "node:fs"
import { withContentCollections } from "@content-collections/next"
//import withBundleAnalyzer from "@next/bundle-analyzer"
import createMDX from "@next/mdx"
import { rehypeCode, remarkGfm, remarkHeading, remarkImage } from "fumadocs-core/mdx-plugins"
import rehypeMdxImportMedia from "rehype-mdx-import-media"

const myTheme = JSON.parse(readFileSync("data/x.json", "utf8"))

const rehypeCodeOptions = {
	themes: {
		light: myTheme,
		dark: myTheme,
	},
}

const remarkImgOptions = {
	placeholder: "blur",
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["mdx", "ts", "tsx"],
	images: {
		dangerouslyAllowSVG: true,
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				hostname: "shared.akamai.steamstatic.com",
				protocol: "https",
			},
			{
				hostname: "img.logo.dev",
				protocol: "https",
			},
			{
				hostname: "i.scdn.co",
				protocol: "https",
			},
		],
	},
}

/* let config = nextConfig

if (process.env.ANALYZE === "true") {
	config = withBundleAnalyzer()(config)
} else {
	config = withContentCollections(config)
} */

//export default config

/* const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeMdxImportMedia, [rehypeCode, rehypeCodeOptions], remarkHeading],
	},
}) */

export default withContentCollections(nextConfig)
