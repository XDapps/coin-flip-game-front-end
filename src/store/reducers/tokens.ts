
import { SET_TOKEN_BALANCE } from "../../constants/actionTypes";

export interface ITokensState {
	tokenBalance: number;
}

// Define action type interfaces
export interface SetTokenBalanceAction {
	type: typeof SET_TOKEN_BALANCE;
	data: number;
}

const initialState: ITokensState = {
	tokenBalance: 0,
};

const tokensReducer = (state: ITokensState = initialState, action: SetTokenBalanceAction) => {
	switch (action.type) {
		case "SET_TOKEN_BALANCE":
			return {
				...state,
				tokenBalance: action.data,
			};
		default:
			return state;
	}
};

export default tokensReducer;
