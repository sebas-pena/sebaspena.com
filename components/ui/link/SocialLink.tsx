import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/Icons"
import Link from "next/link"
import React from "react"

export type SocialLinkProps = {
	href: string
	platform: "instagram" | "linkedin" | "github"
	className: string
}

const SocialLink = ({ href, platform, className }: SocialLinkProps) => {
	return (
		<Link
			href={href}
			className={`inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 focus-visible:border-blue-400 focus-visible:ring-1 focus-visible:ring-blue-400 ${className}`}
		>
			{
				{
					instagram: <InstagramIcon width={25} height={25} />,
					github: <GitHubIcon width={25} height={25} />,
					linkedin: <LinkedInIcon width={20} height={20} />,
				}[platform]
			}
		</Link>
	)
}

export default SocialLink
