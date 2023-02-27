import { ExperienceType } from "@/types/about"
import Image from "next/image"
import React from "react"

const ExperienceCard = (props: ExperienceType) => {
	return (
		<div className="p-3 px-4 border border-neutral-300 rounded-lg">
			<h3 className="font-semibold text-xl">{props.title}</h3>
			<div className="flex items-center gap-2 my-2">
				<Image src="/svg/calendar.svg" width={20} height={20} alt="" />
				<p className="font-semibold">
					<span>{props.start}</span>
					<span> | </span>
					<span>{props.end === "current" ? "Actualidad" : props.end}</span>
				</p>
			</div>
			<div>
				{props.tools.map((tool, i) => (
					<span key={tool}>
						{tool} {i < props.tools.length - 1 ? "| " : ""}
					</span>
				))}
			</div>
		</div>
	)
}

export default ExperienceCard
