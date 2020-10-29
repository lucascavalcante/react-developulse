import React, { useState, useEffect, createContext, useContext } from "react";
import { externalApi } from "../services/api";

const CityContext = createContext();

export default function CityProvider({ children }) {
	const [cities, setCities] = useState(null);
	const [state, setState] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		externalApi
			.get("Contact/Cities?province=" + state)
			.then((res) => {
				setCities(res.data.Items);
			})
			.catch((error) => {
				console.log(error.response.data);
			})
			.then(() => {
				setIsLoading(false);
			});
	}, [state]);

	return (
		<CityContext.Provider value={{ cities, setState, isLoading, setIsLoading }}>
			{children}
		</CityContext.Provider>
	);
}

export function useCity() {
	const context = useContext(CityContext);
	const { cities, setState, isLoading, setIsLoading } = context;

	return { cities, setState, isLoading, setIsLoading };
}
