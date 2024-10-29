import { cx } from "::lib/utils"
import type { ReactNode } from "react"

type CProps = {
	large?: string
	alt?: string
	className?: string
	children: ReactNode
}
export default function Container(props: CProps) {
	const { large, alt, className, children } = props
	return (
		<div
			className={cx(
				"container px-8 mx-auto xl:px-5",
				large ? " max-w-screen-xl" : " max-w-screen-lg",
				!alt && "py-5 lg:py-8",
				className,
			)}
		>
			{children}
		</div>
	)
}
