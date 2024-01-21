import React from 'react'
import LeagueCardHeader from '../components/LeagueCardHeader'

function LeagueCardInfo({ children }) {
	return (
		<div className='w-[650px] h-[700px] shadow-xl rounded-xl bg-white'>
			<LeagueCardHeader />

			{children}
		</div>
	)
}

export default LeagueCardInfo