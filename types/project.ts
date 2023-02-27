export type ProjectType = {
	title: string
	description: string
	tools: TechnologiesType[]
	link_repo: string
	link_demo: string
	date: Date
	image: string
}

export type TechnologiesType = "nextjs" | "react" | "javascript" | "tailwind"
