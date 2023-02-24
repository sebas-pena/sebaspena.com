import Link, { LinkProps } from "next/link"
import React from "react"

type LinkButtonProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

const LinkButton = ({ className, children, ...props }: LinkButtonProps) => {
	return (
		<Link
			className={`${className} inline-block py-2 px-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`}
			{...props}
		>
			{children}
		</Link>
	)
}

export default LinkButton
