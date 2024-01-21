import React from 'react'

function Score({ date, status, goals }) {
	return (
		<div className='flex flex-col gap-2 items-center'>
			<div className='flex flex-col items-center gap-1'>
				<span className='text-[12px] nunito'>{date}</span>
				<small className='text-[12px] nunito'>{status}</small>
			</div>

			<div className='flex flex-row items-start justify-between gap-5'>
				<span>{goals.home}</span>
				<span>⚽️</span>
				<span>{goals.away}</span>
			</div>
		</div>
	)
}

export default Score