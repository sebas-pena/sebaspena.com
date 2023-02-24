"use client"
import { MDXRemote } from "next-mdx-remote"
import code from "../../mdx/Code"
import li from "../../mdx/Li"
import Headings from "../../mdx/Heading"
import p from "../../mdx/P"

export default function PostContent({
	compiledSource,
}: {
	compiledSource: string
}) {
	return (
		<MDXRemote
			compiledSource={compiledSource}
			components={{ ...Headings, code, li, p }}
		/>
	)
}
