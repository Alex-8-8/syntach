import {
  NEXT_STEP, 
  PREV_STEP,
  SET_ERROR
} from './constants'

const initialState = {
    step: 1,
    error: false
  }
  
  export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
      case NEXT_STEP:
        return {
          ...state,
          step: state.step + 1
        };
      case PREV_STEP:
        return {
          ...state,
          step: state.step - 1
        }
      case SET_ERROR:
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    };
  };