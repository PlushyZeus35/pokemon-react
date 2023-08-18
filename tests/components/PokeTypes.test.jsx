import { render, screen } from "@testing-library/react"
import { PokeTypes } from "../../src/components/PokeTypes";

describe('Tests of <PokeTypes/> component', () => {
    const pokeTypes = [{
        type: {
            name: 'fire'
        }
    },{
        type: {
            name: 'water'
        }
    },{
        type: {
            name: 'ground'
        }
    }
    ]

    test('Should render no types if no types are specified in props', () => {
        const { container } = render(<PokeTypes />)
        expect(container).toMatchSnapshot();
        expect(container.getElementsByTagName('img').length).toBe(0);
    })

    test('Should render a set of images based on types array passed in props', () => {
        render(<PokeTypes types={pokeTypes}/>)

        const images = screen.getAllByRole('img');
        expect(images.length).toBe(pokeTypes.length);
        images.map((image, index) => {
            expect(image.src).toContain(`/icons/${pokeTypes[index].type.name}.png`);
            expect(image.alt).toBe(pokeTypes[index].type.name);
        })
    })

})