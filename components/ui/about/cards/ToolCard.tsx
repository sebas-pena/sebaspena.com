import Image from "next/image"
import React from "react"

const ToolCard = ({ tool }: { tool: string }) => {
	return (
		<div className="p-4 rounded-lg border border-neutral-200" title={tool}>
			<Image
				key={tool}
				height={30}
				width={30}
				src={`/svg/tech/${tool.toLocaleLowerCase()}.svg`}
				alt={tool}
			/>
		</div>
	)
}

export default ToolCard
