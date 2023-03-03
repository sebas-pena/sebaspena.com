"use client"
import { MDXRemote } from "next-mdx-remote"
import code from "../../mdx/Code"
import li from "../../mdx/Li"
import Headings from "../../mdx/Heading"
import p from "../../mdx/P"
import { Ol as ol, Ul as ul } from "@/components/mdx/Lists"
import a from "@/components/mdx/Link"
export default function PostContent({
	compiledSource,
}: {
	compiledSource: string
}) {
	return (
		<MDXRemote
			compiledSource={compiledSource}
			components={{ ...Headings, code, li, p, ol, ul, a }}
		/>
	)
}
