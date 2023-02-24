"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import React from "react"

export type NavLinkProps = {
	href: string
	text: string
}

const NavLink = ({ href, text, ...props }: NavLinkProps) => {
	const path = usePathname()
	const isActive = path?.startsWith(href)
	return (
		<Link
			href={href}
			className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 py-2 px-3 ${
				isActive ? "font-semibold border-0 border-b-2 border-[#333]" : ""
			}`}
		>
			{text}
		</Link>
	)
}

export default NavLink
