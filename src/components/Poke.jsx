import { useFetch } from "../hooks/useFetch"
import { PokeInfo } from "./PokeInfo";
import { PokeSkel } from "./PokeSkel";
import PropTypes from 'prop-types';

export const Poke = ({name, url}) => {

    const {data, isLoading, isError} = useFetch(url);
    const {sprites, types} = isLoading ? {} : data;

    return (
        <>
            {
                isLoading && (<PokeSkel />)
            }
            {
                isLoading || (<PokeInfo name={name} img={sprites?.front_default} types={types} />)
            }
        </>
    )
}

Poke.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}