import {
	LOGIN_TO_ACCOUNT,
	ERROR_CREATE_ACCOUNT,
	ERROR_LOGIN_TO_ACCOUNT,
	CREATE_ACCOUNT,
	LOGOUT,
} from "../types";
import * as api from "../../api";

export const loginAccount = (credentials) => async (dispatch) => {
	console.log("Login account is here");
	console.log(credentials);
	try {
		const { data } = await api.loginAccount(credentials);
		console.log(data);
		dispatch({ type: LOGIN_TO_ACCOUNT, payload: data });
		localStorage.setItem("userInfo", JSON.stringify(data.token));
		localStorage.setItem("userId", JSON.stringify(data.id));
	} catch (e) {
		console.log("error " + e);
		dispatch({ type: ERROR_LOGIN_TO_ACCOUNT, payload: "Cannot Login" });
	}
};

export const logoutAccount = () => async (dispatch) => {
	console.log("Logging out");
	try {
		const id = localStorage.getItem("userId");
		console.log(id);
		localStorage.removeItem("userInfo");
		localStorage.removeItem("userId");
		await api.logoutAccount(id);
		dispatch({ type: LOGOUT, payload: [] });
		// await api.logoutAccount(token)
	} catch (e) {
		console.log("Coś sie z....nisczył..ooo");
	}
};

export const createAccount = (credentials) => async (dispatch) => {
	console.log("Login account is here");
	console.log(credentials);
	try {
		const { data } = await api.createAccount(credentials);
		console.log(data);
		dispatch({ type: CREATE_ACCOUNT, payload: data });
	} catch (e) {
		console.log("error " + e);
		dispatch({ type: ERROR_CREATE_ACCOUNT, payload: "Cannot Login" });
	}
};
