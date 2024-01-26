import { useState } from "react";

const initialState = {
	league: {
		id: 39,
		name: "Premier League",
		type: "League",
		logo: "39.png"
	},
	season: 2019,
	matchDay: 1,
	limit: 38
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const changeMatchday = (payload) => {
		setState({
			...state,
			matchDay: payload + 1
		});
	};

	return {
		state,
		changeMatchday
	};
};

export default useInitialState;
