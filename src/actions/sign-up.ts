import { NavigateFunction } from "react-router-dom";
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { LOGIN, SET_TOKEN_BALANCE } from "../constants/actionTypes";
import { RootState } from '../store/index';
import * as messages from "../messages";
import * as api from "../api";

export const signup = (formData: Record<string, string>, history: NavigateFunction): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);
		dispatch({ type: LOGIN, data });
		dispatch({ type: SET_TOKEN_BALANCE, data: 100 });
		history("/");
		messages.success("Login Successful");
	} catch (error) {
		messages.error(JSON.stringify(error));
	}
};

