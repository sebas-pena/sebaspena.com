export type LogoType = "javascript" | "react" | "inco" | "fing"
export type KeyWordType = LogoType

export type PostDataType = {
	title: string
	slug: string
	date: Date
	description: string
	tags: KeyWordType[]
	logo: LogoType
}

export type PostType = {
	frontMatter: PostDataType
	content: string
}
