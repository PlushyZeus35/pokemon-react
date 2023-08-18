import { renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'
import { act } from 'react-dom/test-utils';

describe('Tests in useCounter hook', () => {
    test('Should initialice hook in init value in param', () => {
        const {result} = renderHook(() => useCounter(0));
        const {counter} = result.current;
        expect(counter).toBe(0);
    })

    test('Should increment counter in 5 hook with increment method', () => {
        const {result} = renderHook(() => useCounter(0));
        const {increment} = result.current;
        act(()=>{
            increment();
        })
        const {counter} = result.current;
        expect(counter).toBe(5);
    })

    test('Should not decrease counter in 5 hook with decrement method if counter is 0', () => {
        const {result} = renderHook(() => useCounter(0));
        const {decrement, increment} = result.current;
        act(()=>{
            decrement();
        })
        const {counter} = result.current;
        expect(counter).toBe(0);
    })

    test('Should decrease counter in 5 hook with decrement method', () => {
        const {result} = renderHook(() => useCounter(10));
        const {decrement} = result.current;
        act(()=>{
            decrement();
        })
        const {counter} = result.current;
        expect(counter).toBe(5);
    })
})