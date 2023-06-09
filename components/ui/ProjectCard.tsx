import React from "react"
import { ProjectType } from "@/types/project"
import Image from "next/image"
import CodeLink from "./link/CodeLink"
import DemoLink from "./link/DemoLink"

const ProjectCard = (props: ProjectType) => {

	return (
		<div className="flex flex-col md:flex-row h-full gap-5 p-4 rounded-lg bg-white shadow-md border-neutral-100 border">
			<div
				className="md:w-96"
			>
				<Image
					src={`/images/screenshots/${props.image}`}
					className="w-full object-contain aspect-video"
					height={720 * 0.5625}
					width={720}
					alt={`${props.title} screenshot`}
				/>
			</div>
			<div className="flex flex-col flex-1">
				<h2 className="font-semibold text-xl my-2">{props.title}</h2>
				<p className="mb-3">{props.description}</p>
				<div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 justify-between mt-auto">
					<div className="flex gap-2 flex-wrap">
						{props.tools.map((tool) => (
							<Image
								key={tool}
								src={`/svg/tech/${tool.toLocaleLowerCase()}.svg`}
								width={25}
								height={25}
								alt={tool}
								title={tool}
							/>
						))}
					</div>
					<div className="flex gap-2">
						{props.link_repo && <CodeLink href={props.link_repo} />}
						{props.link_repo && <DemoLink href={props.link_demo} />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
