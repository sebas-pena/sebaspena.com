import BlogAside from "@/components/ui/blog/Aside"
import PostCard from "@/components/ui/post/PostCard"
import { getPostsByKeyWord, POSTS_MAIN_CATEGORIES } from "@/lib/posts/mdx"
import { KeyWordType } from "@/types/post"
import React from "react"

type Params = {
	keyword: KeyWordType
}

type Props = {
	params: Params
}

export const dynamicParams = false

export async function generateStaticParams(): Promise<Params[]> {
	const hostPaths = POSTS_MAIN_CATEGORIES.map((keyword) => ({ keyword }))
	return hostPaths
}

const KeyWordFilteredPage = ({ params }: Props) => {
	const posts = getPostsByKeyWord(params.keyword)
	return (
		<div className="px-5 text-[#333] flex gap-10 flex-col md:flex-row">
			<main className="flex-1">
				<h1 className="font-semibold text-xl mt-3 mb-4">
					Artículos sobre{" "}
					{
						{
							fing: "FING",
							inco: "INCO",
							javascript: "JavaScript",
							react: "React",
						}[params.keyword]
					}
				</h1>
				<div className="flex flex-col gap-4">
					{posts.map((post) => (
						<PostCard {...post} key={post.slug} />
					))}
				</div>
			</main>
			<BlogAside keywords={POSTS_MAIN_CATEGORIES} />
		</div>
	)
}

export default KeyWordFilteredPage
