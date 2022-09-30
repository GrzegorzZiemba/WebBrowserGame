import { GET_TOWN, UPGRADE_BUILDING } from "../types";

const initialState = {
	town: {},
	building: {},
	loading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_TOWN:
			return { ...state, town: action.payload, loading: false };

		case UPGRADE_BUILDING:
			return { ...state, building: action.payload };

		default:
			return state;
	}
}
