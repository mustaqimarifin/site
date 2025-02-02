import { cx } from "::lib/utils"
import type { FC, HTMLAttributes } from "react"

type SkeletonProps = HTMLAttributes<HTMLDivElement>

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => (
	<div className={cx("animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-900", className)} {...props} />
)
