import { combineReducers } from "redux";
import CountReducer from "./CountReducer";

const rootReducer = combineReducers({
  Count: CountReducer,
  //other reducers come here...
});

export default rootReducer;