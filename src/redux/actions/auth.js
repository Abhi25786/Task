import types from "../types"

types
export const loginContinue = () => {
    return {
        type: types.LOGIN
    }
}
export const logoutContinue = () => {
    return {
        type: types.USER_LOGOUT
    }
}