import React from 'react'
import Dropdown from './Dropdown'

function LeagueCardHeader() {
	return (
		<div className='flex items-center p-4 bg-indigo rounded-t-xl'>
			<div className='flex flex-1 gap-3'>
				<div className='bg-white h-[43px] w-[43px] rounded-md p-1'>
					<img
						src="https://media.api-sports.io/football/leagues/39.png"
						alt="Football league logo"
					/>
				</div>

				<div className='flex flex-col'>
					<strong className='text-white montserrat'>Premier League</strong>
					<small className='text-white nunito'>England</small>
				</div>
			</div>

			<div className='flex flex-2 gap-2'>
				<Dropdown />
			</div>
		</div>
	)
}

export default LeagueCardHeader