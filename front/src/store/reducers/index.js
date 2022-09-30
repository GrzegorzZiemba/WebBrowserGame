import { combineReducers } from "redux";
import townReducers from "./townReducers";
import userReducer from "./userReducers";
export default combineReducers({ user: userReducer, town: townReducers });
