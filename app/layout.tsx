import { Navbar } from "::components/navbar"
import { siteUrl } from "::lib/consts"
import { cx } from "::lib/utils"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import type { FC, ReactNode } from "react"
import { Toaster } from "sonner"
import "./globals.css"
import { ViewTransitions } from "next-view-transitions"
import { Imp, KOne, Mono, Quad, RFlex } from "./fonts"

type RootLayoutProperties = {
	readonly children: ReactNode
}

const name = "Mustaqim Arifin"

export const metadata: Metadata = {
	applicationName: name,
	authors: [
		{
			name,
			url: siteUrl,
		},
	],
	creator: name,
	metadataBase: new URL(siteUrl),
	formatDetection: {
		telephone: false,
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
	},
	openGraph: {
		type: "website",
		siteName: name,
		locale: "en_US",
	},
	publisher: name,
	twitter: {
		card: "summary_large_image",
		creator: "@vmprmyth",
	},
}

const RootLayout: FC<RootLayoutProperties> = ({ children }) => (
	<ViewTransitions>
		<html lang="en">
			<body
				className={cx(
					RFlex.variable,
					Mono.variable,
					Quad.variable,
					Imp.variable,
					KOne.variable,
					"bg-gray-50 font-sans dark:bg-neutral-950",
				)}
			>
				{children}
				<Navbar />
				<Toaster />
				<Analytics />
			</body>
		</html>
	</ViewTransitions>
)

export default RootLayout
