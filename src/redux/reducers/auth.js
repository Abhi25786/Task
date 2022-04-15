import storeLogin from "../../utils/utils";
import types from "../types";
const initialState = {
    userdata: {}
};

export const Continue = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: {
            const data = action.payload
            console.log("Logindata--------", data)
            storeLogin(data)
            return { userdata: data };
        }
        case types.USER_LOGOUT: { return state = false; }
        default: return state;
    }

}
