import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Language } from '../Reducers/Language';
import { Login } from '../Reducers/Login';
import { Register } from '../Reducers/Register';
import { Verify } from '../Reducers/Verify';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Language,
            Login,
            Register,
            Verify
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}