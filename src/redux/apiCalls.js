import { loginFailure, loginStart, loginSuccess } from "./authRedx";
import { outsideRequest } from "../requestAxios";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await outsideRequest.post('/auth/login', user);
        res.data.success ? dispatch(loginSuccess(res.data.data)) : dispatch(loginFailure());
    } catch (error) {
        dispatch(loginFailure());
    }
}