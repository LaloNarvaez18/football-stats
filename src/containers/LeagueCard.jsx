import React from 'react'
import LeagueCardHeader from '../components/LeagueCardHeader'

function LeagueCardInfo({ children }) {
	return (
		<div className='w-auto min-w-[700px] h-auto min-h-[720px] shadow-md border-[1px] border-gray rounded-xl bg-white'>
			<LeagueCardHeader />

			{children}
		</div>
	)
}

export default LeagueCardInfo