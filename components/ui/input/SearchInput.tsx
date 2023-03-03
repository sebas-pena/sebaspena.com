"use client"
import Image from "next/image"
import Link from "next/link"
import React, { ChangeEvent, useState, useEffect } from "react"

type PostDataType = { title: string; description: string; slug: string }[]

type SearchInputProps = {
	placeholder?: string
	className?: string
	postsData: PostDataType
}

const normalizeString = (str: string) => {
	return str
		.replace(/[áäà]/g, "a")
		.replace(/[éëè]/g, "e")
		.replace(/[íïì]/g, "i")
		.replace(/[óöò]/g, "o")
		.replace(/[úüù]/g, "u")
		.toLowerCase()
}

const SearchInput = ({
	placeholder = "Search...",
	className,
	postsData = [],
}: SearchInputProps) => {
	const [search, setSearch] = useState<string>("")
	const [result, setResult] = useState<PostDataType>([])

	useEffect(() => {
		if (search.length) {
			const results = postsData
				.filter((item) => {
					const normalizedTitle = normalizeString(item.title)
					const normalizedDescription = normalizeString(item.description)
					const searchTerms = normalizeString(search).split(" ")

					return searchTerms.every((term) => {
						return (
							normalizedTitle.includes(term) ||
							normalizedDescription.includes(term)
						)
					})
				})
				.slice(0, 4)

			setResult(results)
		} else {
			setResult([])
		}
	}, [search, postsData])

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	return (
		<div
			className={`rounded-lg border-[1px] w-[13rem] border-solid border-neutral-600 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 ${className}`}
		>
			<label className="flex gap-2 p-1 px-2">
				<Image width={20} height={20} src="/svg/magnify.svg" alt="" />
				<input
					className="focus:outline-none w-0 flex-1"
					type="text"
					name="search"
					placeholder={placeholder}
					onChange={handleInputChange}
					value={search}
				/>
			</label>
			{result.length ? (
				<ul className="absolute z-20 shadow-sm top-[calc(100%_+_2px)] flex flex-col w-full bg-white">
					{result.map((post) => (
						<li
							className="border hover:relative hover:z-10 hover:ring-1 hover:ring-blue-400 border-neutral-200"
							key={post.slug}
						>
							<Link
								className="p-3 block"
								href={`/blog/${post.slug}`}
								onClick={() => setSearch("")}
							>
								<p className="text-md mb-3">{post.title}</p>
								<p className="text-xs">{post.description}</p>
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default SearchInput
