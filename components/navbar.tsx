"use client"

import { cx } from "::lib/utils"
import {
	BriefcaseBusinessIcon,
	CircleUserIcon,
	HashIcon,
	HomeIcon,
	LayersIcon,
	MessagesSquareIcon,
	NewspaperIcon,
	NotebookPenIcon,
} from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import type { FC } from "react"
import Avatar from "./icon.png"
import { Link } from "./link"

const Kat = () => {
	return (
		<div className={cx("mb-1.5 w-6 h-6 invert-[.45] dark:invert-[.50]")}>
			<Image src={Avatar} alt="" />
		</div>
	)
}

const pages = [
	{ name: "Home", path: "/", icon: Kat },
	{ name: "About", path: "/about", icon: CircleUserIcon },
	{ name: "Work", path: "/work", icon: BriefcaseBusinessIcon },
	{ name: "Blog", path: "/blog", icon: NotebookPenIcon },
	///{ name: "Posts", path: "/posts", icon: HashIcon },
	{ name: "Features", path: "/features", icon: NewspaperIcon },
	{ name: "Stack", path: "/stack", icon: LayersIcon },
	{ name: "Contact", path: "/contact", icon: MessagesSquareIcon },
]

export const Navbar: FC = () => {
	const pathname = usePathname()
	const isActive = (path: string) => (path === "/" ? path === pathname : pathname.startsWith(path))

	return (
		<nav
			className={cx(
				"-translate-x-1/2 fixed bottom-6 left-1/2 isolate z-50 flex items-center gap-6 rounded-full border bg-opacity-50 px-6 text-sm shadow-lg backdrop-blur-sm backdrop-filter",
				"border-neutral-950/10 bg-white/80",
				"dark:border-neutral-100/10 dark:bg-neutral-950/80",
			)}
		>
			{pages.map(link => (
				<Link
					key={link.path}
					href={link.path}
					label={link.name}
					className={cx(
						"relative py-3",
						isActive(link.path) ? "font-medium text-orange-500" : "text-neutral-500 dark:text-neutral-400",
					)}
				>
					<span className="block sm:hidden">
						{/* @ts-ignore */}
						<link.icon className="h-5 w-5" />
					</span>
					<span className="hidden sm:block">{link.name}</span>
					{isActive(link.path) && <span className="absolute top-full left-0 h-px w-full bg-current" />}
				</Link>
			))}
		</nav>
	)
}
