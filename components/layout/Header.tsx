import Image from "next/image"
import Link from "next/link"
import React from "react"
import SearchInput from "../ui/input/SearchInput"
import NavLink, { NavLinkProps } from "../ui/link/NavLink"

const NavLinks: NavLinkProps[] = [
	{ href: "/blog", text: "Blog" },
	{ href: "/portfolio", text: "Portfolio" },
	{ href: "/about", text: "Sobre Mi" },
]

const Header = ({
	postsData,
}: {
	postsData: { title: string; description: string; slug: string }[]
}) => {
	return (
		<header className="flex w-full justify-between max-w-5xl m-auto p-5 mb-5">
			<Link
				href="/"
				className="flex gap-2 items-center focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
			>
				<Image
					width={35}
					height={35}
					alt="sebaspena logo"
					src="/svg/crab.svg"
				/>
				<p className="font-semibold font-sans text-2xl text-neutral-700">
					Sebas
				</p>
			</Link>
			<nav className="relative flex items-center gap-5">
				<SearchInput className="hidden md:block" postsData={postsData} />
				<ul className="list-none items-center flex">
					{NavLinks.map((item) => (
						<li key={item.href}>
							<NavLink {...item}>{item.text}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header
