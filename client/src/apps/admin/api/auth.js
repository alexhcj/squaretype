import {API} from "../../../shared/api/api";

export const authAPI = {
	login(data) {
		return API.post(`/admin/auth/login`, data).then((res) => res.data)
	},
}