import BlogAside from "@/components/ui/blog/Aside"
import PostCard from "@/components/ui/post/PostCard"
import { getPosts, POSTS_KEYWORDS } from "@/lib/posts/mdx"
import React from "react"

const BlogIndex = () => {
	const posts = getPosts()
	return (
		<div className="px-5 text-[#333] flex gap-10 flex-col md:flex-row">
			<main className="flex-1">
				<h1 className="font-semibold text-xl mt-3 mb-4">
					Últimas publicaciones
				</h1>
				<div className="flex flex-col gap-4">
					{posts.map((post) => (
						<PostCard {...post} key={post.slug} />
					))}
				</div>
			</main>
			<BlogAside keywords={POSTS_KEYWORDS} />
		</div>
	)
}

export default BlogIndex
