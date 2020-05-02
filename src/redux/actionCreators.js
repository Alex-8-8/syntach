import { NEXT_STEP, PREV_STEP} from './constants'

export const nextStepAction = () => ({
    type: NEXT_STEP
  })
  
export const prevStepAction = () => ({
    type: PREV_STEP
  })