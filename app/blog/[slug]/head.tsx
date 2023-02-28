import { getPostMeta } from "@/lib/posts/mdx"

export default async function Head(props: { params: { slug: string } }) {
	const { description, title } = await getPostMeta(props.params.slug)
	return (
		<>
			<title>{title}</title>
			<link rel="icon" href="/svg/crab.svg" />
			<meta property="og:site_name" content="sebaspena.com"></meta>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:type" content="blog" />
			<meta property="og:description" content={description} />
			<meta property="og:image" content="/images/logo.webp" />
			<meta
				property="og:url"
				content={`https://sebaspena.com/blog/${props.params.slug}`}
			/>
			<meta property="og:locale" content="es_ES" />
		</>
	)
}
