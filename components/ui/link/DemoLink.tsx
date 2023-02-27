import Image from "next/image"
import React from "react"

const DemoLink = ({ href }: { href: string }) => {
	return (
		<a
			href={href}
			className="inline-flex py-1 px-3 items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-800 rounded-md border border-neutral-500  focus-visible:ring-2  focus-visible:border-transparent focus-visible:ring-blue-400 outline-none"
		>
			<Image src="/svg/link.svg" width={21} height={21} alt="" />
			Demo
		</a>
	)
}

export default DemoLink
