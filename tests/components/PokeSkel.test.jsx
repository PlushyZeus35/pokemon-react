import { render, screen } from "@testing-library/react"
import { PokeSkel } from "../../src/components/PokeSkel";

describe('Test <PokeSkel/> component', () => {
    test('Should render a card with a placeholder (Snapshot)', ()=>{
        const { container } = render(<PokeSkel />);
        expect(container).toMatchSnapshot();
    })
})