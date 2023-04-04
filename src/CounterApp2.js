import React from "react";
import { connect } from "react-redux";

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

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp2);