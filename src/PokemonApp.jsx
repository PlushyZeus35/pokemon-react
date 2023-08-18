import { PokeList } from "./components/PokeList"

export const PokemonApp = () => {
  return (
    <div id="mainContainer">
        <div className="container pt-5">
            <h1>Pokemon App</h1>
            <PokeList />
        </div> 
    </div>
  )
}
