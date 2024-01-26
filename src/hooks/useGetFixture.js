import { useEffect, useState } from "react";

const useGetFixture = (API, TOKEN, round) => {
	const [fixture, setFixture] = useState([]);

	useEffect(() => {
		fetch(API, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "v3.football.api-sports.io",
				"x-rapidapi-key": TOKEN
			}
		})
			.then((res) => res.json())
			.then((data) => setFixture(data.response))
			.catch((err) => err);
	}, [round]);

	return fixture;
};

export default useGetFixture;