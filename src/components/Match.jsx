import React from 'react'

function Match({ children }) {
	return (
		<div
			className='flex flex-row justify-between h-full w-full bg-lightgray border-[1px] border-gray rounded-md p-3'
		>
			{children}
		</div>
	)
}

export default Match