import Image from "next/image"
import React from "react"

const CodeLink = ({ href }: { href: string }) => {
	return (
		<a
			href={href}
			className="inline-flex py-1 px-3 items-center gap-2 bg-neutral-800 hover:bg-neutral-900 text-white rounded-md  focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
		>
			<Image src="/svg/code.svg" width={21} height={21} alt="" />
			<p className="font-semibold">Code</p>
		</a>
	)
}

export default CodeLink
