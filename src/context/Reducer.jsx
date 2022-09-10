const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state, currentUser: action.payload
            }
        }
        case "LOGOUT": {
            return {
                ...state, currentUser: null
            }
        }
        default:
            throw new Error("No action matched!")
    }
}
export default Reducer;