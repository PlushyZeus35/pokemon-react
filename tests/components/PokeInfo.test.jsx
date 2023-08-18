import { render, screen } from "@testing-library/react"
import { PokeInfo } from "../../src/components/PokeInfo"

describe('Tests of <PokeInfo /> component', () => {
    const pokeName = 'charmander';
    const pokeImg = 'https://testurl.com/';

    test('Should match with snapshot', () => {
        const {container} = render(<PokeInfo name={pokeName} img={pokeImg}/>)
        expect(container).toMatchSnapshot();
    })

    test('Should render a card with info in props', () => {
        render(<PokeInfo name={pokeName} img={pokeImg}/>)

        // Check pokemon image
        const pokeImage = screen.getByRole('img');
        expect(pokeImage.src).toBe(pokeImg);
        expect(pokeImage.alt).toBe(pokeName);

        // Check pokemon name
        const cardTitle = screen.getByRole('heading',{level: 5});
        expect(cardTitle.innerHTML).toBe(pokeName);

        // Check action button
        const actionButton = screen.getByRole('button');
        expect(actionButton.innerHTML).toBe('Ver más');
    })
})