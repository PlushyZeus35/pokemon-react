import { useState } from "react"

export const useCounter = (initVal) => {
    const [counter, setCounter] = useState(initVal);

    const increment = () => {
        setCounter(counter+5);
    }

    const decrement = () => {
        if(counter==0) return;
        setCounter(counter-5);
    }

    return {
        counter,
        increment,
        decrement
    }
}
