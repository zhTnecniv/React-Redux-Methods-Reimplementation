import React from "react";
import { store } from "./store";
import { useEffect, useState } from "react";

const CounterApp2 = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        store.dispatch({ type: "counter/incremented" })
    }
    const decrementCounter = () => {
        store.dispatch({ type: "counter/decremented" })
    }
    useEffect(() => {
        store.subscribe(() => {
            const { value } = store.getState();
            setCounter(value);
        });
    }, []);
    return (
        <>
            <div>
                Counter 2
            </div>
            <div>
                {counter}
            </div>

            <button onClick={incrementCounter}>
                Increment
            </button>
            <button onClick={decrementCounter}>
                Decrement
            </button>
        </>
    );
}

export default CounterApp2;