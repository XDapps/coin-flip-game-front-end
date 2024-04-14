import { NavigateFunction } from "react-router-dom";
import { ThunkAction } from 'redux-thunk';
import { jwtDecode } from "jwt-decode";
import { Action } from 'redux';
import { WAGER_ERROR, WAGER_RESULT, WAGER_SUBMIT } from "../constants/actionTypes";
import { RootState } from '../store/index';
import * as messages from "../messages";
import * as api from "../api";

export const submitWager = (formData: Record<string, string | number | boolean>, history: NavigateFunction): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
	try {
		dispatch({ type: WAGER_SUBMIT, data: formData });
		const { data } = await api.submitWager(formData);
		const wagerResultDecoded = jwtDecode(data.token) as Record<string, unknown>;
		dispatch({ type: WAGER_RESULT, data: wagerResultDecoded });
		history("/");
	} catch (error) {
		messages.error(JSON.stringify(error));
		dispatch({ type: WAGER_ERROR, data: error });
	}
};
