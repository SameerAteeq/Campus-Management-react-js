import { createContext, useEffect, useReducer, useState } from "react";
import Reducer from "./Reducer";


// export const getCurrentUser = async () => {
//     const docRef = doc(db, "cities", "SF");
//     const docSnap = await getDoc(docRef);
//     const currentUser = docSnap.data();
//     if (docSnap.exists()) {

//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }

const INITIAL_VALUE = {
    currentUser: JSON.parse(localStorage.getItem("user") || null)
}
export const JobContext = createContext();
export const UserContext = createContext(INITIAL_VALUE);
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_VALUE);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser])
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        // if(user.id) {
        //     const docRef = doc(db, "users", user.uid);
        //     const docSnap = await getDoc(docRef);
        //     const fetchSingleUser = docSnap.data();
        // }
    }, [])
    return (
        <UserContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}