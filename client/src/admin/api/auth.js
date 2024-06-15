import {API} from "../../api/api";

export const postsAPI = {
	login(data) {
		return API.post(`/auth/login`, data).then((res) => res.data)
	},
}