import fs from "fs"
import path from "path"
import matter, { GrayMatterFile } from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { LogoType, PostType, PostDataType, KeyWordType } from "@/types/post"

interface MatterResult extends GrayMatterFile<string> {
	data: {
		title: string
		slug: string
		date: string
		description: string
		tags: KeyWordType[]
		logo: LogoType
	}
	content: string
}

export const POSTS_KEYWORDS: KeyWordType[] = ["javascript", "react", "fing"]

export const POSTS_PATH = path.join(process.cwd(), "content/posts")

export const getPostsFilenames = () =>
	fs.readdirSync(POSTS_PATH).filter((path) => path.endsWith(".mdx"))

export const getPostsSlugs = () =>
	getPostsFilenames().map((filename) =>
		filename.substring(0, filename.lastIndexOf("."))
	)

export const getPostData = (slug: string): PostType => {
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`)
	const raw = fs.readFileSync(postPath, "utf8")
	const { data, content } = matter(raw) as MatterResult

	return {
		frontMatter: {
			...data,
			slug,
			date: new Date(data.date),
		},
		content,
	}
}

export const getPostBySlug = async (slug: string) => {
	const { frontMatter, content } = getPostData(slug)
	const source = await serialize(content)
	const { compiledSource } = source

	return {
		frontMatter,
		source: {
			compiledSource,
		},
	}
}

export const getPosts = (): PostDataType[] => {
	const posts = getPostsSlugs()
		.map((slug) => getPostData(slug))
		.map((post) => post.frontMatter)
	posts.sort((postA, postB) => postB.date.getTime() - postA.date.getTime())

	return posts
}
