import React from 'react'
import moment from 'moment'
import Match from '../components/Match'
import Team from '../components/Team'
import Score from '../components/Score'

function Fixtures() {
	const data = [
		{
			fixture: {
				id: 1
			},
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
			},
			goals: {
				home: 0,
				away: 2
			}
		},
		{
			fixture: {
				id: 2
			},
			teams: {
				home: {
					id: 36,
					name: "Fulham",
					logo: "https://media.api-sports.io/football/teams/36.png",
					winner: null
				},
				away: {
					id: 40,
					name: "Liverpool",
					logo: "https://media.api-sports.io/football/teams/40.png",
					winner: null
				}
			},
			goals: {
				home: 2,
				away: 2
			}
		}
	];

	return (
		<div className='grid gap-2 grid-cols-2'>
			{
				data.map((item, index) => (
					<Match key={item.fixture.id}>
						<Team
							type='home'
							logo={item.teams.home.logo}
							name={item.teams.home.name}
						/>

						<Score
							date='2022-08-06T11:30:00+00:00'
							status="Finalizado"
							goals={{ ...item.goals }}
						/>

						<Team
							type='away'
							logo={item.teams.away.logo}
							name={item.teams.away.name}
							code="ARS"
						/>
					</Match>
				))
			}

		</div>
	)
}

export default Fixtures