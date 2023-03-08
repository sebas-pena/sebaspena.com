import React from "react"

export const Ol = ({ children }: { children?: React.ReactNode }) => {
	return <ol className="list-decimal pl-4 mb-6">{children}</ol>
}

export const Ul = ({ children }: { children?: React.ReactNode }) => {
	return <ul className="list-disc pl-4 mb-6">{children}</ul>
}
