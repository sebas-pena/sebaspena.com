type HeadingProps = {
	children: string
}

const H1 = ({ children }: HeadingProps) => {
	return (
		<h1 className="mt-6 mb-5 text-primary-700 font-semibold text-4xl">
			{children}
		</h1>
	)
}
const H2 = ({ children }: HeadingProps) => {
	return (
		<h2 className="mt-6 mb-5 text-primary-700 font-semibold text-3xl">
			{children}
		</h2>
	)
}
const H3 = ({ children }: HeadingProps) => {
	return (
		<h3 className="mt-6 mb-5 text-primary-700 font-semibold text-2xl">
			{children}
		</h3>
	)
}
const H4 = ({ children }: HeadingProps) => {
	return (
		<h4 className="mt-6 mb-5 text-primary-700 font-semibold text-xl">
			{children}
		</h4>
	)
}
const H5 = ({ children }: HeadingProps) => {
	return (
		<h5 className="mt-6 mb-5 text-primary-700 font-semibold text-lg">
			{children}
		</h5>
	)
}
const H6 = ({ children }: HeadingProps) => {
	return (
		<h6 className="mt-6 mb-5 text-primary-700 font-semibold text-lg">
			{children}
		</h6>
	)
}

const Heading = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
}

export default Heading
