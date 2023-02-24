import { LogoType } from "@/types/post"
import Link from "next/link"
import React from "react"
import Logo from "../Logo"

type PostHeaderProps = {
	date: Date
	title: string
	tags: string[]
	logo: LogoType
}
export const PostHeader = ({
	date,
	title,
	tags = [],
	logo,
}: PostHeaderProps) => {
	return (
		<header className="mb-7 mt-3 flex gap-4">
			<Logo type={logo} />
			<div>
				<h1 className="mt-0 mb-2 text-4xl font-semibold">{title}</h1>
				<div className="flex gap-4 text-sm">
					<time
						className="text-neutral-700 font-semibold"
						dateTime={date.toISOString()}
					>
						{date.toLocaleDateString("es-ES", {
							day: "numeric",
							month: "long",
							year: "numeric",
						})}
					</time>
					<span>•</span>
					{tags.length && (
						<>
							<span className="text-neutral-700 font-semibold">Tags :</span>
							<div>
								{tags.map((tag, index) => (
									<span key={tag}>
										<Link href={`/blog/keyword/${tag}`}>{tag}</Link>
										{tags.length > 0 && index < tags.length - 1 && (
											<span className="mx-2">-</span>
										)}
									</span>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</header>
	)
}
