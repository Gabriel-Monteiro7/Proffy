import { combineReducers } from "redux";
import teacher from "./teacher/reducer";
const reducers = combineReducers({
  teacher,
});

export default reducers;
