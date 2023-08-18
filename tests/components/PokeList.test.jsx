import { fireEvent, render, screen } from "@testing-library/react"
import { PokeList } from "../../src/components/PokeList"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch');

describe('Tests of <PokeList /> component', () => {
    const pokeList = {
        results: [{
            name: "bulbasaur",
            url: "https://testurl.com/1"
        },{
            name: "ivysaur",
            url: "https://testurl.com/2"
        }],
        sprites: {
            front_default: "https://imgtesturl.com/2"
        }
    }
    test('Should render loading initially', () => {
        useFetch.mockReturnValue({
            data: [],
            isLoading: true,
            isError: false
        })
        render(<PokeList />);
        expect(screen.getByText('Loading...')).toBeTruthy();
    })

    test('Should render list on hook response', () => {
        useFetch.mockReturnValue({
            data: pokeList,
            isLoading: false,
            isError: false
        })
        render(<PokeList />);
        // Two images of the two pokemos received in hook
        expect(screen.getAllByRole('img').length).toBe(2);
    });

    test('Should initialice in first page', () => {
        useFetch.mockReturnValue({
            data: pokeList,
            isLoading: false,
            isError: false
        })
        render(<PokeList/>);
        const pageCounter = screen.getByTestId('page-counter');
        expect(pageCounter.innerHTML).toBe("1");
    })

    test('Should increment page counter when add button is clicked', () => {
        useFetch.mockReturnValue({
            data: pokeList,
            isLoading: false,
            isError: false
        })
        render(<PokeList/>);
        const incButton = screen.getByTestId('inc-page');
        fireEvent.click(incButton);
        expect(screen.getByTestId('page-counter').innerHTML).toBe("2")
    });

    test('Should decrement page counter when dec button is clicked', () => {
        useFetch.mockReturnValue({
            data: pokeList,
            isLoading: false,
            isError: false
        })
        render(<PokeList/>);
        const incButton = screen.getByTestId('inc-page');
        const decButton = screen.getByTestId('dec-page');
        // +2 pages
        fireEvent.click(incButton);
        fireEvent.click(incButton);
        // -1 page
        fireEvent.click(decButton);
        expect(screen.getByTestId('page-counter').innerHTML).toBe("2")
    })
})