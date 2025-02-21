import * as ActionTypes from '../Actions/ActionTypes';
import { AuthBaseUrl } from '../API/AuthBaseUrl';
import axios from "axios"


export const postLogin = (email, password) => async dispatch => {
    dispatch({ type: ActionTypes.LOGIN_REQUEST });
    try {
        const response = await axios.post(AuthBaseUrl + 'login', {
            email: email,
            password: password
        });
        const loginstate = response.data.value ? true : false;  // To Check if successfully logged in or not 
        const UserData = response.data;  // to return Data if successfully logged in
        const Data = {
            loginstate: loginstate,  // Declare Loginstate to be dispatched
            UserData: UserData,  // Declare UserData to be dispatched
        }
        console.log(loginstate);
        dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: Data });
    } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: error });
    }
};