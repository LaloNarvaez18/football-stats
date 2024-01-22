import LeagueCardInfo from './containers/LeagueCardInfo'
import Fixtures from './containers/Fixtures'
import TabNavigation from './components/TabNavigation'
import './App.css'

function App() {
	const data = [
		{ label: 'Resultados', content: <Fixtures /> },
		{ label: 'Posiciones', content: 'Posiciones' },
		{ label: 'Estadisticas', content: 'Estadisticas' },
		{ label: 'Equipos', content: 'Equipos' }
	]

	return (
		<LeagueCardInfo>
			<TabNavigation data={[...data]} />
		</LeagueCardInfo>
	)
}

export default App
