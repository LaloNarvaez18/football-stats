import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'
import LeagueCard from './containers/LeagueCard'
import Fixtures from './pages/Fixtures'
import Tabs from './components/Tabs'
import './App.css'

function App() {
	const initialState = useInitialState();

	const tabs = [
		{ label: 'Resultados', content: <Fixtures /> },
		{ label: 'Posiciones', content: 'Posiciones' },
		{ label: 'Estadisticas', content: 'Estadisticas' },
		{ label: 'Equipos', content: 'Equipos' }
	]

	return (
		<AppContext.Provider value={initialState}>
			<LeagueCard>
				<Tabs data={[...tabs]} />
			</LeagueCard>
		</AppContext.Provider >
	)
}

export default App
