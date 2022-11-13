import {
	LOGIN_TO_ACCOUNT,
	ERROR_CREATE_ACCOUNT,
	ERROR_LOGIN_TO_ACCOUNT,
	CREATE_ACCOUNT,
	LOGOUT,
} from "../types";
import * as api from "../../api";

export const loginAccount = (credentials) => async (dispatch) => {
	
	
	try {
		const { data } = await api.loginAccount(credentials);
		
		dispatch({ type: LOGIN_TO_ACCOUNT, payload: data });
		localStorage.setItem("userInfo", JSON.stringify(data.token));
		localStorage.setItem("userId", JSON.stringify(data.id));
	} catch (e) {
		
		dispatch({ type: ERROR_LOGIN_TO_ACCOUNT, payload: "Cannot Login" });
	}
};

export const logoutAccount = () => async (dispatch) => {
	
	try {
		const id = localStorage.getItem("userId");
		
		localStorage.removeItem("userInfo");
		localStorage.removeItem("userId");
		await api.logoutAccount(id);
		dispatch({ type: LOGOUT, payload: [] });
		// await api.logoutAccount(token)
	} catch (e) {
		
	}
};

export const createAccount = (credentials) => async (dispatch) => {
	
	
	try {
		const { data } = await api.createAccount(credentials);
		
		dispatch({ type: CREATE_ACCOUNT, payload: data });
	} catch (e) {
		
		dispatch({ type: ERROR_CREATE_ACCOUNT, payload: "Cannot Login" });
	}
};
