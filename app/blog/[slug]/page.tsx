import PostContent from "@/components/ui/post/PostContent"
import { PostHeader } from "@/components/ui/post/PostHeader"
import { getPostBySlug, getPostsSlugs } from "@/lib/posts/mdx"
import React from "react"

type Params = {
	slug: string
}

type Props = {
	params: Params
}

export const dynamicParams = false

export async function generateStaticParams(): Promise<Params[]> {
	const hostPaths = getPostsSlugs().map((slug) => ({
		slug,
	}))
	return hostPaths
}

const PostPage = async ({ params }: Props) => {
	const { frontMatter, source } = await getPostBySlug(params.slug)
	const { date, title, description, tags, logo } = frontMatter
	return (
		<main>
			<article className="mx-auto pt-6 px-4 max-w-3xl w-full">
				<PostHeader title={title} date={date} tags={tags} logo={logo} />
				<PostContent compiledSource={source.compiledSource} />
			</article>
		</main>
	)
}

export default PostPage
