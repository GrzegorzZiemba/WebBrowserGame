import axios from "axios";

const url = "http://localhost:4000";

export const loginAccount = (credentials) => {
	return axios({
		method: "post",
		url: `${url}/user/login`,
		data: credentials,
	});
};

export const logoutAccount = (id) => {
	return axios({
		method: "post",
		url: `${url}/logout`,
		data: { id: id },
	});
};

export const getTown = (token) => {
	
	return axios({
		method: "post",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		url: `${url}/town`,
	});
};

export const upagradeBuilding = (id, token, building) => {
	
	return axios({
		method: "post",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		url: `${url}/town/upgrade/${id}`,
		data: { building: building },
	});
};

export const createAccount = (credentials) => {
	return axios({
		method: "post",
		url: `${url}/createkingdom`,
		data: credentials,
	});
};


export const trainUnits = (qty) => {
	return axios({
		method:"post",
		headers: {
			Authorization: `Bearer ${qty.token}`
		},
		url:`${url}/kingdoms/recruit`,
		data: qty
	})
}


