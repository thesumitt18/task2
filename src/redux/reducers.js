import { ADD, SUBTRACT, MULTIPLY, DIVIDE, CLEAR } from "./action";

const initialState = {
  result: 0,
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { result: state.result + action.payload };
    case SUBTRACT:
      return { result: state.result - action.payload };
    case MULTIPLY:
      return { result: state.result * action.payload };
    case DIVIDE:
      return { result: state.result / action.payload };
    case CLEAR:
      return { result: 0 };
    default:
      return state;
  }
};
