import React from 'react'

function Team({ type, logo, name, code }) {
	return (
		<div className='flex flex-col gap-2 items-center'>
			<img
				className='h-[45px] w-[45px]'
				src={logo}
				alt={name}
			/>
			<span className='nunito text-[12px]'>{name}</span>
		</div>
	)
}

export default Team