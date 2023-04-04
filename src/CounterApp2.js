// import { useContext } from "react";
// import { CounterContext } from "./CounterContext";

// function CounterApp2() {
//     const { counter, incrementCounter } = useContext(CounterContext);
//     return (
//         <>
//             <div>
//                 Counter
//             </div>
//             <div>
//                 {counter}
//             </div>
//             <button onClick={incrementCounter}>Increment</button>
//         </>
//     );
// }

// export default CounterApp2;

import React from "react";
import { CounterContext } from "./CounterContext";

class CounterApp2 extends React.Component {
    render() {
        return (
            <>
                <div>
                    Counter
                </div>
                <div>
                    {this.context.counter}
                </div>

                <button onClick={this.context.incrementCounter}>
                    Increment
                </button>
            </>
        );
    }

}

CounterApp2.contextType = CounterContext;
export default CounterApp2;

