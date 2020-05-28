import initialState from "../store/initialState.js";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        authenticatedAs: action.payload.authenticatedAs,
        uid: action.payload.uid,
      };
    case "LOG_OUT":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
