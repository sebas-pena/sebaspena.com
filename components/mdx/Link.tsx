import React from "react"

const A = ({
	href,
	children,
}: {
	href?: string
	children?: React.ReactNode
}) => {
	return (
		<a
			href={href}
			className="text-blue-600 underline"
			target="_blank"
			rel="noopener nofollow noreferrer"
		>
			{children}
		</a>
	)
}

export default A
