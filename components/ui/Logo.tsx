import { LogoType } from "@/types/post"
import Image from "next/image"
import React from "react"

const Logo = ({
	type,
	className = "",
}: {
	className?: string
	type: LogoType
}) => {
	return (
		<picture className="shrink-0">
			<Image
				src={`/images/logos/${type}.webp`}
				width={70}
				height={70}
				className={`rounded-lg ${className}`}
				alt={`${type} logo`}
			/>
		</picture>
	)
}

export default Logo
