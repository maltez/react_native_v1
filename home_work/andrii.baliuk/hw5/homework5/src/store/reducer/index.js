import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";

const rootReducer = combineReducers({
  calendarState: calendarReducer
});

export default rootReducer;
