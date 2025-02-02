import type { SpotifyProperties } from "::app/api/cron/spotify/route"
import { Card } from "::components/card"
import { Link } from "::components/link"
import { get } from "@vercel/edge-config"
import Image from "next/image"
import type { ReactElement } from "react"
import Vinyl from "./vinyl.png"

export const SpotifyCard = async (): Promise<ReactElement> => {
	const song = await get<SpotifyProperties>("spotify")

	if (!song) {
		return <div />
	}

	return (
		<Card title="Now Listening" className="flex flex-row gap-4 p-4 md:flex-col md:justify-between">
			<div className="-top-12 -left-12 -mb-12 relative w-fit">
				<Image
					src={Vinyl}
					alt=""
					width={128}
					height={128}
					className="m-0 block h-32 w-32"
					quality={100}
					loading="eager"
					priority
				/>
				<Image
					src={song.image}
					alt=""
					width={640}
					height={640}
					className="-rotate-12 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-14 w-14 shrink-0 rounded-full"
					sizes="56px"
					quality={100}
				/>
			</div>
			<p className="text-neutral-500 text-sm dark:text-neutral-400">
				<Link href={song.href}>{song.name}</Link> by {song.artist}
			</p>
		</Card>
	)
}
