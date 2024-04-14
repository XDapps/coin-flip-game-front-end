import { ThunkAction } from 'redux-thunk';
import { jwtDecode } from "jwt-decode";
import { Action } from 'redux';
import { SET_TOKEN_BALANCE } from "../constants/actionTypes";
import { RootState } from '../store/index'; 
import * as messages from "../messages";
import * as api from "../api";

export const loadUserTokenBalance = (userEmail: string): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
	try {
		const { data } = await api.tokenBalance({ email: userEmail });
		const decodedResult = jwtDecode(data.token) as Record<string, unknown>;
		dispatch({
			type: SET_TOKEN_BALANCE,
			data: decodedResult.tokenBalance,
		});
	} catch (error) {
		console.log("error", error);
		messages.error(JSON.stringify(error));
	}
};
