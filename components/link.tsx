import { Link as NextLink } from "next-view-transitions"
import type { FC, ReactNode } from "react"

type LinkProperties = {
	readonly href?: string
	readonly children?: ReactNode
	readonly className?: string
	readonly label?: string
}

export const Link: FC<LinkProperties> = ({ href, children, label, ...properties }) =>
	href?.startsWith("/") ? (
		<NextLink href={href} aria-label={label} {...properties}>
			{children}
		</NextLink>
	) : (
		<a
			href={href}
			target={href?.startsWith("http") ? "_blank" : undefined}
			rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
			aria-label={label}
			{...properties}
		>
			{children}
		</a>
	)
