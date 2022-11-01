import { combineReducers } from "redux";
import armyReducers from "./armyReducers";
import townReducers from "./townReducers";
import userReducer from "./userReducers";
export default combineReducers({ user: userReducer, town: townReducers, army: armyReducers });
