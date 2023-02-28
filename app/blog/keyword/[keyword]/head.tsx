import { KeyWordType } from "@/types/post"

export default async function Head(props: {
	params: { keyword: KeyWordType }
}) {
	const { keyword } = props.params
	const descriptions = {
		javascript:
			"Aprende a programar en JavaScript y mejora tus habilidades de desarrollo web con guías prácticas y recursos útiles. Descubre cómo dar un paso más en JavaScript conmigo.",
		react:
			"Aprende a programar en React con mis tutoriales, consejos y prácticas. Desarrolla tus habilidades en desarrollo web y crea aplicaciones modernas con esta hermosa libreria.",
		inco: "En mi blog, encontrarás guías útiles, tutoriales prácticos y recursos para facilitar tus cursos del INCO. Descubre cómo mejorar tu entorno, habilidad y lógica.",
		fing: "Manual de supervivencia finger, guías, tutoriales y recursos para no llevarte todo el semestre a examen sino parte de él.",
	}
	return (
		<>
			<title>{`Articulos sobre ${keyword}`}</title>
			<link rel="icon" href="/svg/crab.svg" />
			<meta property="og:site_name" content="sebaspena.com"></meta>
			<meta name="twitter:card" content="summary_large_image"></meta>
			<meta name="description" content={descriptions[keyword]} />
			<meta property="og:title" content={`Articulos sobre ${keyword}`} />
			<meta property="og:type" content="blog" />
			<meta property="og:description" content={descriptions[keyword]} />
			<meta property="og:image" content="/images/logo.webp" />
			<meta
				property="og:url"
				content={`https://sebaspena.com/blog/${keyword}`}
			/>
			<meta property="og:locale" content="es_ES" />
		</>
	)
}
