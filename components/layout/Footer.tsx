import React from "react"
import SocialLink, { SocialLinkProps } from "../ui/link/SocialLink"

const socialLinks: SocialLinkProps[] = [
	{
		href: "https://github.com/sebas-pena",
		platform: "github",
		className: "text-black",
	},
	{
		href: "https://www.linkedin.com/in/pablo-sebastian-pena/",
		platform: "linkedin",
		className: "text-blue-700",
	},
	{
		href: "https://www.instagram.com/sebastian_.pena/",
		platform: "instagram",
		className: "text-primary",
	},
]

const Footer = () => {
	return (
		<footer className="py-4 mt-5">
			<p className="text-center mb-2">Find me on</p>
			<div className="flex gap-4 justify-center">
				{socialLinks.map((socialLink) => (
					<SocialLink key={socialLink.href} {...socialLink} />
				))}
			</div>
		</footer>
	)
}

export default Footer
