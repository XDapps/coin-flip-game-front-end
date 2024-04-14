import { combineReducers } from "redux";
import login, { AuthState } from "./reducers/login";
import tokens, { ITokensState } from "./reducers/tokens";
import wager, { IWagerState } from "./reducers/wager";

export default combineReducers({
	login,
	tokens,
	wager,
});

export interface RootState {
	tokens: ITokensState;
	login: AuthState;
	wager: IWagerState;
}