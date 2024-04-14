
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { NavigateFunction } from "react-router-dom";
import { LOGIN } from "../constants/actionTypes";
import { RootState } from '../store/index';
import * as messages from "../messages";
import * as api from "../api";

export const login = (formData: Record<string, string>, history: NavigateFunction): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
	try {
		const { data } = await api.login(formData);
		dispatch({ type: LOGIN, data });
		history("/");
		messages.success("Login Successful");
	} catch (error) {
		console.log(error);
		messages.error("Login Failed, please try again.");
	}
};
