import React from "react";
import { useSelector } from "react-redux";

const CounterApp1 = () => {
    const counter = useSelector(state => state.value);
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