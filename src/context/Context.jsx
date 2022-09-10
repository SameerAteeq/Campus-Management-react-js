import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";
const INITIAL_VALUE = {
    currentUser: null
}
const Context = createContext(INITIAL_VALUE);
export const contextValue = () => {
    return useContext(Context);
}

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_VALUE);
    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    )
}
export default ContextProvider;