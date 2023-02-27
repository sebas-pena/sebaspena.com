import { ProjectType } from "@/types/project"
import fs from "fs"
import path from "path"

export const PROJECTS_PATH = path.join(process.cwd(), "content/projects")

export const getProjects = async (): Promise<ProjectType[]> => {
	const filenames = fs.readdirSync(PROJECTS_PATH)
	const projects: ProjectType[] = []

	for (const filename of filenames) {
		const fileContent = await fs.promises.readFile(
			path.join(PROJECTS_PATH, filename),
			"utf-8"
		)
		const project: ProjectType = JSON.parse(fileContent)
		project.date = new Date(project.date)
		projects.push(project)
	}
	projects.sort(
		(projectA, projectB) => projectB.date.getTime() - projectA.date.getTime()
	)
	return projects
}
