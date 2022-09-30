import { GET_TOWN, UPGRADE_BUILDING } from "../types";
import * as api from "../../api";

export const getTown = (token) => async (dispatch) => {
	console.log("Login account is here");

	try {
		const { data } = await api.getTown(token);
		console.log(data);
		dispatch({ type: GET_TOWN, payload: data });
	} catch (e) {
		console.log("error " + e);
	}
};

export const upagradeTown = (id, token, building) => async (dispatch) => {
	console.log("Upgrading Action");
	try {
		const { data } = await api.upagradeBuilding(id, token, building);
		console.log("data from Update");
		console.log(data);
		dispatch({ type: UPGRADE_BUILDING, payload: data });
	} catch (e) {
		console.log("error" + e);
	}
};
