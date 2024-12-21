import { combineReducers } from "redux";
import CountReducer from "./CountReducer";

const reducers = combineReducers({
  Count: CountReducer,
  //other reducers come here...
});

export default reducers;