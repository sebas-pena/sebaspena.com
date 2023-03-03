import SeoHead from "@/components/seo/Head"
import { getPostMeta } from "@/lib/posts/mdx"

export default async function Head(props: { params: { slug: string } }) {
	const { description, title } = await getPostMeta(props.params.slug)
	return (
		<>
			<SeoHead
				title={title}
				description={description}
				type="article"
				url={`https://sebaspena.com/blog/${props.params.slug}`}
			/>
		</>
	)
}
