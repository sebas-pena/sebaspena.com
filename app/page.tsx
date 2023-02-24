import LinkButton from "@/components/ui/link/LinkButton"
import Image from "next/image"

export default function Home() {
	return (
		<main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-4">
			<div className="flex flex-col gap-1 text-[#333]">
				<p className="text-3xl font-semibold">Hello!</p>
				<h2 className="text-4xl font-semibold">My name is Pablo Peña,</h2>
				<p className="max-w-lg text-lg">
					I&apos;m a 20-year-old full-stack developer living in Montevideo,
					Uruguay. Since I was young, I discovered my passion for technology and
					programming, which led me to study and train as a developer.
				</p>
				<div className="flex flex-wrap gap-2 mt-2">
					<LinkButton
						href="/resume.pdf"
						rel="noopener nofollow"
						target="_blank"
						className="bg-primary-600 hover:bg-primary-700"
						download="Pablo Peña"
					>
						<div className="flex gap-2">
							<Image src="/svg/resume.svg" width={20} height={20} alt="" />
							<span className="text-white">Downoad Resume</span>
						</div>
					</LinkButton>
					<LinkButton
						rel="noopener nofollow"
						href="mailto://pablo.sebastian.pena@gmail.com"
						className="bg-[#25d366] hover:bg-[#20b959]"
					>
						<div className="flex gap-2">
							<Image src="/svg/mail.svg" width={20} height={20} alt="" />
							<span className="text-white">Contact Me</span>
						</div>
					</LinkButton>
				</div>
			</div>
			<div className="rounded-full border-solid border-2 border-primary outline-8 outline-solid outline outline-white shadow-profile mr-7">
				<Image
					className="rounded-full"
					height={220}
					width={220}
					alt="Pablo Peña"
					src="/images/profile.jpg"
				/>
			</div>
		</main>
	)
}
