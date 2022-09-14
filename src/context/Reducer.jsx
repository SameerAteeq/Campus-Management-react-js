const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                currentUser: action.payload
            }
        }
        case "LOGOUT": {
            return {
                currentUser: null
            }
        }
        default:
            throw new Error("No action matched!")
    }
}
export default Reducer;