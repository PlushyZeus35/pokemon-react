import { useContext } from "react"
import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch";
import { LoadingList } from "./LoadingList";
import { Poke } from "./Poke";

export const PokeList = () => {

    const {counter, increment, decrement} = useCounter(0);
    const {isLoading, data, isError} = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=5`);
    const {results} = isLoading ? [] : data;
    return (
        <div>
            <div id="pokeList">
                
                    {
                        isLoading || 
                        results.map(poke => <Poke key={poke.url} name={poke.name} url={poke.url} />)
                    }
                    {
                        isLoading && 
                        <LoadingList key="loading" />
                    }
                
            </div>
            <div id="buttonsContainer" className="d-flex justify-content-center">
                <div className="btn-group " role="group" aria-label="Button group">
                    <button data-testid="dec-page" type="button" onClick={decrement} className="btn btn-lg btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                    </button>
                    <button data-testid="page-counter" type="button" onClick={decrement} className="btn btn-lg btn-primary">
                        {(counter/5)+1}
                    </button>
                    <button data-testid="inc-page" type="button" onClick={increment} className="btn btn-lg btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
