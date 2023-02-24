"use client"
import Image from "next/image"
import React, { FormEventHandler } from "react"

type SearchInputProps = {
	placeholder?: string
	className?: string
}

const SearchInput = ({
	placeholder = "Search...",
	className,
}: SearchInputProps) => {
	const handleSearch: FormEventHandler = (e) => {
		e.preventDefault()
	}
	return (
		<form
			onSubmit={handleSearch}
			className={`rounded-lg border-[1px] p-1 px-2 w-[13rem] border-solid border-neutral-600 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 ${className}`}
		>
			<label className="flex gap-2">
				<Image width={20} height={20} src="/svg/magnify.svg" alt="" />
				<input
					className="focus:outline-none w-0 flex-1"
					type="text"
					name="search"
					placeholder={placeholder}
				/>
			</label>
		</form>
	)
}

export default SearchInput
