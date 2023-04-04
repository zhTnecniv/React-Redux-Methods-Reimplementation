import React from "react";
import { store } from "./store";
import { useEffect, useState } from "react";

const CounterApp1 = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        store.subscribe(() => {
            const { value } = store.getState();
            setCounter(value);
        });
    }, []);

    return (
        <>
            <div>
                Counter 1
            </div>
            <div>
                {counter}
            </div>
        </>
    );
}

export default CounterApp1;