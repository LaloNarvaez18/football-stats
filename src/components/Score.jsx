import React from 'react'
import moment from 'moment'
import football from '../assets/football.svg'

function Score({ date, status, goals }) {

	const dateFormat = (date) => {
		return moment(date).format('DD/MM/YYYY')
	}

	return (
		<div className='flex flex-col gap-2 items-center'>
			<div className='flex flex-col items-center gap-1'>
				<span className='text-[12px] nunito'>{dateFormat(date)}</span>
				<small className='text-[12px] nunito'>{status}</small>
			</div>

			<div className='flex flex-row items-center justify-between gap-5'>
				<span className='font-bold text-darkgray text-[16px] nunito'>{goals.home}</span>
				<img src={football} className='w-[16px] h-[16px]' alt="" />
				<span className='font-bold text-darkgray text-[16px] nunito'>{goals.away}</span>
			</div>
		</div>
	)
}

export default Score