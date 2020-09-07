import * as ActionTypes from '../Actions/ActionTypes';

const InitalState = {
    isLoading: false,
    isVerifed: null,
}


export const Verify = (state = InitalState, action) => {
    switch (action.type) {
        case ActionTypes.VERIFY_REQUEST:
            return { ...state, isLoading: true, isVerifed: false }
        case ActionTypes.VERIFY_SUCCESS:
            return { ...state, isLoading: false, isVerifed: action.payload }
        case ActionTypes.VERIFY_FAILURE:
            return { ...state, isLoading: false, isVerifed: false, errMsg: action.payload }
        default:
            return state;
    }
};
