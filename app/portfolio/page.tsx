import ProjectCard from "@/components/ui/ProjectCard"
import { getProjects } from "@/lib/projects/projects"
import React from "react"

const ProjectListPage = async () => {
	const projects = await getProjects()
	return (
		<main className="flex-1 px-4">
			<h1 className="font-semibold text-2xl mt-3 mb-4">Proyectos</h1>
			<ul
				className={`grid grid-cols-1 ${
					projects.length > 1 ? "min-[600px]:grid-cols-2" : ""
				}  md:grid-cols-1  gap-4 p-4`}
			>
				{projects.map((project) => (
					<li key={project.title}>
						<ProjectCard {...project} />
					</li>
				))}
			</ul>
		</main>
	)
}

export default ProjectListPage
