import React from "react"

export const Ol = ({ children }: { children?: React.ReactNode }) => {
	return <ol className="list-decimal pl-4">{children}</ol>
}

export const Ul = ({ children }: { children?: React.ReactNode }) => {
	return <ul className="list-disc">{children}</ul>
}
