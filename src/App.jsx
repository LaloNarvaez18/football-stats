import LeagueCardInfo from './containers/LeagueCardInfo'
import Fixture from './containers/Fixture'
import TabNavigation from './components/TabNavigation'
import './App.css'

function App() {
	const data = [
		{ label: 'Resultados', content: <Fixture /> },
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
