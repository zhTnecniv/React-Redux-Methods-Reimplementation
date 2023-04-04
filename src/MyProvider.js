import { useMemo } from "react";
import MyContext from "./myContext";

function MyProvider({ store, children }) {
    const contextValue = useMemo(() => store, [store]);

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider;


