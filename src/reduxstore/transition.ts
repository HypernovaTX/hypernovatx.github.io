import { createStore } from "redux";

export interface trState {
  callFunction: () => void,
  step: number,
}
interface Action {
  type: 'ADD_FUNC' | 'STEP',
  payload: {
    func: () => void,
    step: number,
  }
}

export default function transition() {
  const initialState: trState = {
    callFunction: () => {},
    step: -1,
  };

  const trReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      // Apply the global callback function to start transition
      case 'ADD_FUNC': return {
        ...state,
        callFunction: action.payload.func, 
        step: state.step,
      };

      // Update the transition animation step
      case 'STEP': return {
        ...state,
        callFunction: state.callFunction, 
      };

      // Prevent issues
      default: return state;
    }
  };

  return createStore(trReducer);
}