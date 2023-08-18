import { useEffect, useState } from "react"

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		isError: null
	})

	const getPokemons = async () => {
		setState({data: null, isLoading: true, isError: null})
		const resp = await fetch(url);
		const respData = await resp.json();
		setState({data: respData, isLoading: false, isError: null})
	}

	useEffect(() => {
		getPokemons();
	}, [url])
	

	return {
		data: state.data,
		isLoading: state.isLoading,
		isError: state.isError
	}
}
