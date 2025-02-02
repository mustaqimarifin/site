import { Card } from "::components/card"
import { Link } from "::components/link"
import { cx } from "::lib/utils"
import { get } from "@vercel/edge-config"
import type { ReactElement } from "react"

export const AnnouncementCard = async (): Promise<ReactElement> => {
	const announcement = await get<{
		readonly text: string
		readonly link: string
	}>("announcement")

	if (!announcement) {
		return <div />
	}

	return (
		<Card title="Latest Update" className="flex flex-col items-start justify-between gap-4 p-4">
			<p className="text-neutral-500 text-sm dark:text-neutral-400">{announcement.text}</p>
			<Link
				href={announcement.link}
				className={cx(
					"rounded-full px-4 py-2.5 font-medium text-sm no-underline",
					"bg-neutral-100 text-neutral-950 outline-orange-500 placeholder:text-neutral-500",
					"dark:bg-neutral-900 dark:text-white dark:placeholder-text-neutral-600",
				)}
			>
				Learn more
			</Link>
		</Card>
	)
}
