import { waitFor, renderHook } from '@testing-library/react'
import { useFetch } from '../../src/hooks/useFetch';

describe('Tests of useFetch hook', () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=5';

    test('Should initalice in a loading state', () => {
        const {result} = renderHook(() => useFetch(URL));
        const {data, isLoading} = result.current;
        expect(data).toBeNull();
        expect(isLoading).toBeTruthy();
    });

    test('Should retrieve some data from API',async () => {
        const {result} = renderHook( () => useFetch(URL));
        await waitFor(() => expect(result.current.data.length).not.toBeNull())
        const {data, isLoading} = result.current;
        expect(data.length).not.toBeNull();
        expect(isLoading).toBeFalsy();
    })
})