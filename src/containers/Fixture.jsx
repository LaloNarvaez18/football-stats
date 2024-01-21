import React from 'react'
import Match from '../components/Match'
import Team from '../components/Team'
import Score from '../components/Score'

function Fixture() {
	const data = [
		{
			fixture: {
				teams: {
					home: {
						id: 52,
						name: "Crystal Palace",
						logo: "https://media.api-sports.io/football/teams/52.png",
						winner: false
					},
					away: {
						id: 42,
						name: "Arsenal",
						logo: "https://media.api-sports.io/football/teams/42.png",
						winner: true,
					}
				}
			}
		}
	];

	return (
		<div className='grid gap-2 grid-cols-2'>
			<Match>
				<Team
					type='home'
					logo="https://media.api-sports.io/football/teams/52.png"
					name="Crystal Palace"
					code="CRP"
				/>

				<Score
					date="Sáb 11, 2023"
					status="Finalizado"
					goals={{ home: 0, away: 2 }}
				/>

				<Team
					type='away'
					logo="https://media.api-sports.io/football/teams/42.png"
					name="Arsenal"
					code="ASR"
				/>
			</Match>
		</div>
	)
}

export default Fixture