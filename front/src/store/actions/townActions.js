import { GET_TOWN, UPGRADE_BUILDING } from "../types";
import * as api from "../../api";

export const getTown = (token) => async (dispatch) => {
	

	try {
		const { data } = await api.getTown(token);
		
		dispatch({ type: GET_TOWN, payload: data });
	} catch (e) {
		
	}
};

export const upagradeTown = (id, token, building) => async (dispatch) => {
	
	try {
		const { data } = await api.upagradeBuilding(id, token, building);
		
		
		dispatch({ type: UPGRADE_BUILDING, payload: data });
	} catch (e) {
		
	}
};
