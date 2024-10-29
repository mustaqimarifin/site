import type { FC } from "react"

type HeaderProperties = {
	readonly title: string
	readonly description: string
}

export const Header: FC<HeaderProperties> = ({ title, description }) => (
	<header className="space-y-2 mx-auto">
		<h1 className="m-0 text-3xl font-quad tracking-[-0.045em]">{title}</h1>
		<p className="m-0 text-md">{description}</p>
	</header>
)
