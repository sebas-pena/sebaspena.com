import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import "../styles/globals.css"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body className="font-sans flex flex-col min-w-screen min-h-screen">
				<Header />
				<div className="flex-1 flex flex-col w-full max-w-5xl m-auto">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	)
}
