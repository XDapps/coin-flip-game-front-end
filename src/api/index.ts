import axios from "axios";

const API = axios.create({ baseURL: "https://coin-flip-game-back-end-production.up.railway.app/" });
API.interceptors.request.use((req) => {
	const profile = localStorage.getItem("profile")
	if (!profile) return req;
	const token = JSON.parse(profile).token;
	req.headers.Authorization = `Bearer ${token}`;
	return req;
});

export const login = (data: Record<string, string>) => API.post("/api/user/login", data);
export const signUp = (data: Record<string, string>) => API.post("/api/user/signup", data);
export const changePassword = (data: Record<string, string>) =>
	API.post("/api/user/changePassword", data);
export const submitWager = (data: Record<string, string | number | boolean>) => API.post("/api/user/wager", data);
export const wagerHistory = (data: Record<string, string>) =>
	API.post("/api/user/wager-history", data);
export const tokenBalance = (data: Record<string, string>) =>
	API.post("/api/user/token-balance", data);
