import React, { useEffect } from "react";
import { useContext, useState } from "react";
import myContext from "./myContext";

// const myConnect = (mapStateToProps, mapDispatchToProps) => {
//     return (InnerComponent) => {
//         class WrappedComponent extends React.Component {
//             static contextType = myContext;
//             state = {
//                 storeState: {}
//             }
//             componentDidMount() {
//                 this.unsubscribe = this.context.subscribe(() => {
//                     this.setState({ storeState: this.context.getState() })
//                 });
//                 this.setState({ storeState: this.context.getState() });
//             }
//             componentWillUnmount() {
//                 this.unsubscribe();
//             }
//             render() {
//                 const stateProps = mapStateToProps !== undefined ? mapStateToProps(this.state.storeState) : {};
//                 console.log("stateProps: ", stateProps);
//                 const dispatchProps = typeof mapDispatchToProps === "function" ? mapDispatchToProps(this.context.dispatch) : {};
//                 return <InnerComponent
//                     {...this.props}
//                     {...stateProps}
//                     {...dispatchProps} />;
//             }
//         };
//         return WrappedComponent;
//     }
// }

const myConnect = (mapStateToProps, mapDispatchToProps) => {
    return (InnerComponent) => {
        const WrappedComponent = (props) => {
            const [state, setState] = useState({});
            const contextValue = useContext(myContext);
            useEffect(() => {
                const unsubscribe = contextValue.subscribe(() => {
                    setState(contextValue.getState());
                });
                setState(contextValue.getState());
                return () => unsubscribe();
            }, []);
            const stateProps = mapStateToProps !== undefined ? mapStateToProps(state) : {};
            const dispatchProps = typeof mapDispatchToProps === "function" ? mapDispatchToProps(contextValue.dispatch) : {};
            return <InnerComponent
                {...props}
                {...stateProps}
                {...dispatchProps} />;
        };
        return WrappedComponent;
    }
}

export default myConnect;