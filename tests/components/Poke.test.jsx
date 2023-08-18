import { render, screen } from "@testing-library/react"
import { Poke } from "../../src/components/Poke"
import { useFetch } from "../../src/hooks/useFetch"

// Set mock function to useFetch hook
jest.mock('../../src/hooks/useFetch');

describe('Tests of <Poke /> component', () => {
    const pokeName = 'charizard';
    const pokeUrl = 'https://testurl.com/';
    const pokeInfo = {
        name: pokeName,
        types: [{type: {name: "water"}}],
        sprites: {
            front_default: 'https://testurlimg.com/'
        }
    }
    test('Should render loading initially', ()=>{
        useFetch.mockReturnValue({
            data: [],
            isLoading: true,
            isError: false
        })
        render(<Poke name={pokeName} url={pokeUrl}/>)
        expect(screen.getByText('Loading...')).toBeTruthy();
    })

    test('Should render pokemon after receiving data from hook', ()=>{
        useFetch.mockReturnValue({
            data: pokeInfo,
            isLoading: false,
            isError: false
        })
        const {container} = render(<Poke name={pokeName} url={pokeUrl}/>)
        expect(screen.getAllByRole('img').length).toBe(2);
        expect(screen.getByAltText(pokeName).src).toBe(pokeInfo.sprites.front_default);
        expect(container).toMatchSnapshot();
    })
})