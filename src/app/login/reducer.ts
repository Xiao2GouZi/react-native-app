import {Map} from 'immutable'
import { handleActions } from 'redux-actions';

import * as TSType from '../../types'
import * as ActionTypes from '../../redux-config/action-type'

const initialState:Map<string, any> = Map({
    loginMobile: '',
    loginPassword: ''
});

const reducers = {};

reducers[ActionTypes.LOGIN_LOGIN_LOADING] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginRegisterLoading', action.payload);
};

reducers[ActionTypes.LOGIN_LOGIN_SUCCESS] = (state:Map<string, any>, action: TSType.IReduxAction) => {
    return state.set('loginStatus', action.payload);
};



export default handleActions(reducers, initialState)
