import { storeLogin, getLogin, LogoutData } from "../../utils/utils";
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
        case types.USER_LOGOUT: {

            LogoutData();

            return { userdata: undefined }
        }
        default: return state;
    }

}
