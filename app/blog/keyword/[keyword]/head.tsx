import SeoHead from "@/components/seo/Head"
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
			<SeoHead
				title={`Articulos sobre ${keyword}`}
				description={descriptions[keyword]}
				type="blog"
				url={`https://sebaspena.com/blog/${keyword}`}
			/>
		</>
	)
}
