import React from 'react'

function Match({ children }) {
	return (
		<div
			className='grid grid-cols-3 gap-5 h-full w-full bg-lightgray border-[1px] border-gray rounded-md p-[10px]'
		>
			{children}
		</div>
	)
}

export default Match