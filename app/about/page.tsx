import React from "react"
import { AboutConfig } from "@/content/about/config"
import ExperienceCard from "@/components/ui/about/cards/ExperienceCard"
import EducationCard from "@/components/ui/about/cards/EducationCard"
import ToolCard from "@/components/ui/about/cards/ToolCard"

const AboutPage = () => {
	return (
		<main className="flex-1 px-4">
			<h2 className="text-2xl mb-6">Experiencia:</h2>
			<ol className="flex flex-wrap gap-4 px-4 mb-6">
				{AboutConfig.experience.map((experience) => (
					<li key={experience.title}>
						<ExperienceCard {...experience} />
					</li>
				))}
			</ol>
			<h2 className="text-2xl mb-6">Tecnologias:</h2>
			<ul className="flex flex-wrap justify-center gap-4 mb-6">
				{AboutConfig.tools.map((tool) => (
					<ToolCard key={tool} tool={tool} />
				))}
			</ul>
			<h2 className="text-2xl mb-6">Estudios:</h2>
			<ol className="flex flex-col gap-6 mb-6 px-4">
				{AboutConfig.education.map((education) => (
					<li key={education.title}>
						<EducationCard {...education} />
					</li>
				))}
			</ol>
		</main>
	)
}

export default AboutPage
