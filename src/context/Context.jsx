import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";
const INITIAL_VALUE = {
    currentUser: null
}
export const Context = createContext(INITIAL_VALUE);
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_VALUE);
    return (
        <Context.Provider value={{ currentUser: state.currentUser, dispatch }}>{children}</Context.Provider>
    )
}
export default ContextProvider;