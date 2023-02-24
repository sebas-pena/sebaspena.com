import { KeyWordType } from "@/types/post"
import Link from "next/link"
import React from "react"
import Logo from "../Logo"

const BlogAside = ({ keywords }: { keywords: KeyWordType[] }) => {
	return (
		<aside>
			<h2 className="font-semibold text-xl  mt-3 mb-4">Posts por categoría</h2>
			<ul className="flex flex-row flex-wrap md:flex-nowrap justify-evenly md:justify-start md:flex-col items-center gap-4 text-center">
				{keywords.map((keyword) => (
					<li key={keyword}>
						<Link href={`/blog/keyword/${keyword}`}>
							<Logo
								type={keyword}
								className="hover:scale-110 transition-all duration-100 ease-out"
							/>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default BlogAside
