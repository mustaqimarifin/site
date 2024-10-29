"use client"

import { cx } from "::lib/utils"
import type { FC } from "react"
import LiteYouTubeEmbed, { type LiteYouTubeProps } from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
type VideoProperties = LiteYouTubeProps & {
	readonly className?: string
}

export const Video: FC<VideoProperties> = ({ className, ...properties }) => (
	<div className={cx("relative aspect-video overflow-hidden rounded", className)}>
		<div style={{ position: "absolute", inset: 0 }}>
			<LiteYouTubeEmbed {...properties} webp poster="maxresdefault" />
		</div>
	</div>
)
