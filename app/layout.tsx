import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { getPosts } from "@/lib/posts/mdx"
import "../styles/globals.css"

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const posts = await getPosts()
	const postsData = posts.map(({ description, slug, title }) => ({
		description,
		slug,
		title,
	}))
	return (
		<html lang="es">
			<head />
			<body className="font-sans flex flex-col min-w-screen min-h-screen">
				<Header postsData={postsData} />
				<div className="flex-1 flex flex-col w-full max-w-5xl m-auto">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	)
}
