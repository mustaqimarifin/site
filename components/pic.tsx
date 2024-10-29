import Image from "next/image"

export const Pic = (props: {
	src: any
	alt?: any
	className?: any
	width?: any
	height?: any
}) => {
	const { src, alt, width, height, className } = props
	const path = require(`../public${src!}`)
	const img = src.startsWith("http") ? src : path

	return (
		<Image
			src={img}
			alt={alt}
			width={Number(width)}
			height={Number(height)}
			placeholder="blur"
			unoptimized={src.startsWith("http")}
			className={className}
		/>
	)
}
