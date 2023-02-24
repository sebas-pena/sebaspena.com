"use client"
import React from "react"
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs"
import SyntaxHighlighter from "react-syntax-highlighter"

const Code = ({
	children,
	className,
}: {
	children: string
	className: string
}) => {
	const language = className ? className.replace(/language-/, "") : ""
	return language ? (
		<SyntaxHighlighter
			language={language}
			style={{
				...atomOneDarkReasonable,
				hljs: {
					display: "block",
					overflowX: "auto",
					padding: "1.5rem",
					marginBottom: "1.5rem",
					borderRadius: "0.375rem",
					color: "#abb2bf",
					background: "#282c34",
				},
			}}
		>
			{children}
		</SyntaxHighlighter>
	) : (
		<code className="px-2 bg-neutral-200 text-neutral-600 rounded-[3px]">
			{children}
		</code>
	)
}

export default Code
