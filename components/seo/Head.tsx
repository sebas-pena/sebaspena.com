import React from "react"

type SeoHeadType = {
	title: string
	description: string
	type: string
	url: string
}

const SeoHead = ({ title, description, type, url }: SeoHeadType) => {
	return (
		<>
			<title>{title}</title>
			<link rel="icon" href="/svg/crab.svg" />

			<meta property="og:url" content={url} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
			<meta
				property="og:image"
				content="https://sebaspena.com/images/logo.webp"
			/>

			<meta property="og:site_name" content="sebaspena.com"></meta>
			<meta property="og:type" content={type} />
			<meta property="og:locale" content="es_ES" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="sebaspena.com" />
			<meta property="twitter:url" content={url} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta
				name="twitter:image"
				content="https://sebaspena.com/images/logo.webp"
			/>
		</>
	)
}

export default SeoHead
