import Link from "next/link"
import React from "react"

const A = ({ href, children }: { href: string; children: string }) => {
	return (
		<Link
			href={href}
			className="text-blue-600 underline"
			target="_blank"
			rel="noopener nofollow"
		>
			{children}
		</Link>
	)
}

export default A
