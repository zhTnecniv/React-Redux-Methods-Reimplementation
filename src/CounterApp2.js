import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterApp2 = () => {
    const counter = useSelector(state => state.value);
    const dispatch = useDispatch();
    const incrementCounter = () => {
        dispatch({ type: "counter/incremented" })
    }
    const decrementCounter = () => {
        dispatch({ type: "counter/decremented" })
    }
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