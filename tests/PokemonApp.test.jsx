import { render,screen } from "@testing-library/react"
import { PokemonApp } from "../src/PokemonApp"

describe('Test of <PokemonApp /> component', () => {
    test('Should display app title', () => {
        render(<PokemonApp />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain('Pokemon App');
    })
})