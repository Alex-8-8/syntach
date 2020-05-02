import {NEXT_STEP, PREV_STEP} from './constants'

const initialState = {
    step: 1
  }
  
  export const stepsReducer = (state = initialState, action) => {
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
      default:
        return state;
    };
  };