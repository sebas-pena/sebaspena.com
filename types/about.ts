export type ExperienceType = {
	title: string
	start: string
	end: string
	tools: string[]
}

export type EducationType = {
	title: string
	institute: string
	start: string
	end: string
	description: string
	complete: boolean
	certificates: { internal: boolean; src: string }[]
	tools: string[]
}

export type SkillsType = {
	lang: string[]
	front: string[]
	back: string[]
	other: string[]
}

export type AboutConfig = {
	experience: ExperienceType[]
	education: EducationType[]
	skills: SkillsType
}
