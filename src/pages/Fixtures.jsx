import React, { useState, useContext } from 'react'
import AppContext from "../context/AppContext";
import Match from '../containers/Match'
import Team from '../components/Team'
import Score from '../components/Score'
import Button from '../components/Button'
import useGetFixture from '../hooks/useGetFixture'

function Fixtures() {
	const { state } = useContext(AppContext)
	const [round, setRound] = useState(1);
	const API = `https://v3.football.api-sports.io/fixtures?season=${state.season}&league=${state.league.id}&round=Regular Season - ${round}`
	const TOKEN = "d4bd0305835b3a6ebc86b5c4b39b7a3f"
	const fixture = useGetFixture(API, TOKEN, round)

	return (
		<div className='grid gap-4'>
			<div className="flex items-center">
				<div className="flex flex-1">
					<h1 className='text-[16px] text-darkgray font-bold nunito'>Jornada {round} de {state.limit}</h1>
				</div>

				<div className="flex flex-2 gap-1">
					<Button
						isDisabled={round > state.matchDay ? false : true}
						icon={<i className='bi bi-arrow-left'></i>}
						style={'w-[30px] h-[30px] flex items-center justify-center text-center bg-lightgray border-[1px] text-darkgray border-gray p-1 rounded-full'}
						onClick={() => setRound((prev) => prev - 1)}
					/>

					<Button
						isDisabled={round < state.limit ? false : true}
						icon={<i className='bi bi-arrow-right'></i>}
						style={'w-[30px] h-[30px] flex items-center justify-center text-center bg-lightgray border-[1px] text-darkgray border-gray p-1 rounded-full'}
						onClick={() => setRound((prev) => prev + 1)}
					/>
				</div>
			</div>

			<div className='grid gap-2 grid-cols-2'>
				{
					fixture.map((item, index) => (
						<Match key={item.fixture.id}>
							<Team
								type='home'
								logo={item.teams.home.logo}
								name={item.teams.home.name}
							/>

							<Score
								date={item.fixture.date}
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
		</div >
	)
}

export default Fixtures