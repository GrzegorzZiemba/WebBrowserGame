import {
	LOGIN_TO_ACCOUNT,
	LOGOUT,
	ERROR_LOGIN_TO_ACCOUNT,
	CREATE_ACCOUNT,
} from "../types";

const initialState = {
	user: "",
	loading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN_TO_ACCOUNT:
			return { ...state, user: action.payload, loading: false };
		case ERROR_LOGIN_TO_ACCOUNT:
			return { ...state, loading: false, user: action.payload };
		case LOGOUT:
			return { ...state, loading: false, user: action.payload };

		default:
			return state;
	}
}
