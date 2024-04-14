
import { jwtDecode } from "jwt-decode";
import { LOGIN, LOGOUT } from "../../constants/actionTypes";

export interface IUserType {
	name: string;
	email: string;
	tokens: number;
	exp: number;
}

export interface AuthState {
	authData: Record<string, unknown> | null;
	token: string | null;
	user: IUserType | null;
}

// Define action type interfaces
interface LoginAction {
	type: typeof LOGIN;
	data: Record<string, unknown>;
}

interface LogoutAction {
	type: typeof LOGOUT;
	data: null;
}

export type AuthAction = LoginAction | LogoutAction;

const initState: AuthState = {
	authData: null,
	token: null,
	user: null,
}

if (localStorage.getItem("profile")) {
	const profile = JSON.parse(localStorage.getItem("profile") as string);
	const user = jwtDecode(profile.token) as IUserType;
	initState.user = user;
	initState.authData = profile;
	initState.token = profile.token;
}


const loginReducer = (state: AuthState = initState, action: AuthAction) => {
	switch (action.type) {
		case LOGIN: {
			const actionData = action.data;
			localStorage.setItem("profile", JSON.stringify(actionData));
			const user = jwtDecode(actionData.token as string) as Record<string, unknown>;
			return { ...state, authData: actionData, token: actionData.token, user };
		}
		case LOGOUT: {
			localStorage.clear();
			return { ...state, authData: null, token: null, user: null};
		}
		default:
			return state;
	}
};
export default loginReducer;
