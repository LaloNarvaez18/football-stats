import { list } from 'postcss';
import React, { useState } from 'react'

function Dropdown() {
	const [isOpen, setIsOpen] = useState(false)
	const list = ['24/25', '25/26']

	return (
		<div className='relative flex flex-col items-center rounded-lg'>
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				className='bg-none nunito p-2 w-full flex items-center justify-between tracking-wider border-[1px] border-white text-white active:bg-white active:text-indigo duration-300 rounded-md'
			>
				22/23
			</button>

			{
				isOpen && (
					<div className='bg-white absolute nunito p-2 top-12 right-0 flex flex-col gap-2 items-start w-full rounded-md shadow-md'>
						{list.map((item, index) => <span id="index" className='w-full'>{item}</span>)}
					</div>
				)
			}
		</div>
	)
}

export default Dropdown