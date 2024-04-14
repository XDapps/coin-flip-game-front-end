
import { NavigateFunction } from "react-router-dom";
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store/index';
import * as messages from "../messages";
import * as api from "../api";

export const changePassword = (
	formData: Record<string, string>,
	history: NavigateFunction
): ThunkAction<void, RootState, unknown, Action<string>> => async () => {
	try {
		await api.changePassword(formData);
		messages.success("Password Change Was Successful");
		history("/");
	} catch (error) {
		messages.error(JSON.stringify(error));
	}
}