import { 
  NEXT_STEP, 
  PREV_STEP,
  SET_ERROR,
} from './constants'

export const nextStepAction = () => ({
    type: NEXT_STEP
  })
  
export const prevStepAction = () => ({
    type: PREV_STEP
  })

export const setErrorAction = (error) => ({
  type: SET_ERROR,
  payload: error
})