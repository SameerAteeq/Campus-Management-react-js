import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
const INITIAL_VALUE = {
    currentUser: JSON.parse(localStorage.getItem("user") || null)
}
export const Context = createContext(INITIAL_VALUE);
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_VALUE);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser])
    return (
        <Context.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;