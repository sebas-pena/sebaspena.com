import { EducationType } from "@/types/about"
import Image from "next/image"
import React from "react"
import LinkButton from "../../link/LinkButton"

const EducationCard = (props: EducationType) => {
	return (
		<div className="p-5 border border-neutral-300 rounded-lg bg-white">
			<h3 className="text-xl font-semibold mb-1">{props.title}</h3>
			<div className="flex gap-2 mb-1">
				<Image src="/svg/institute.svg" width={20} height={20} alt="" />
				<p className="text-md text-neutral-800 font-semibold">
					{props.institute}
				</p>
			</div>
			<div className="flex gap-2 mb-1">
				<Image src="/svg/calendar.svg" width={20} height={20} alt="" />
				<p className="text-md text-neutral-800 font-semibold">
					{props.start} - {props.end === "current" ? "Actualidad" : props.end}
				</p>
			</div>
			<p className="text-lg my-3">{props.description}</p>
			{props.tools.length ? (
				<div className="flex flex-wrap gap-4 my-3">
					{props.tools.map((tool) => (
						<Image
							key={tool}
							src={`/svg/tech/${tool}.svg`}
							height={24}
							width={24}
							title={tool}
							alt={tool}
						/>
					))}
				</div>
			) : null}
			{props.complete ? (
				<div className="text-end">
					{props.certificates.map((certificate) => (
						<LinkButton
							key={certificate.src}
							rel="noopener nofollow"
							target="_blank"
							className="bg-primary-600 hover:bg-primary-700"
							href={
								certificate.internal
									? `/pdf/${certificate.src}`
									: certificate.src
							}
						>
							<div className="flex gap-2 items-center">
								<Image src="/svg/diploma.svg" width={20} height={20} alt="" />
								<span className="text-white">Certificado</span>
							</div>
						</LinkButton>
					))}
				</div>
			) : null}
		</div>
	)
}

export default EducationCard
