import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {mainReducer} from './mainReducers'

export const rootReducer = combineReducers({
    mainReducer,
    form: formReducer
  })