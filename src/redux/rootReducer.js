import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {stepsReducer} from './stepsReducers'

export const rootReducer = combineReducers({
    stepsReducer,
    form: formReducer
  })