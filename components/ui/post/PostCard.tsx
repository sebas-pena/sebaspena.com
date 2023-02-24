import { LogoType } from "@/types/post"
import Link from "next/link"
import React from "react"
import Logo from "../Logo"

type PostCardProps = {
	title: string
	logo: LogoType
	description: string
	date: Date
	slug: string
}

const PostCard = ({ title, logo, date, slug }: PostCardProps) => {
	return (
		<Link
			href={`/blog/${slug}`}
			className="flex gap-4 p-3 rounded-lg hover:bg-neutral-200"
		>
			<Logo type={logo} />
			<div>
				<h3 className="text-lg font-semibold">{title}</h3>
				<time className="text-sm font-semibold" dateTime={date.toISOString()}>
					{date.toLocaleDateString("es-Es", {
						day: "numeric",
						month: "long",
						year: "numeric",
					})}
				</time>
			</div>
		</Link>
	)
}

export default PostCard
