import React from "react";
// import myConnect from "./myConnect";
import myConnect from "./myConnect";

class CounterApp2 extends React.Component {
    render() {
        const { counter, incrementCounter, decrementCounter } = this.props;
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
}

const mapStateToProps = (state, ownProps) => ({
    counter: state.value
});

const mapDispatchToProps = (dispatch) => ({
    incrementCounter: () => dispatch({ type: "counter/incremented" }),
    decrementCounter: () => dispatch({ type: "counter/decremented" })
});

export default myConnect(mapStateToProps, mapDispatchToProps)(CounterApp2);