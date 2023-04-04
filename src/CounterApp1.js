import React from "react";
import { connect } from "react-redux";

class CounterApp1 extends React.Component {
    render() {
        const { counter } = this.props;
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
}

const mapStateToProps = (state, ownProps) => ({
    counter: state.value
});

export default connect(mapStateToProps)(CounterApp1);