import { WAGER_ERROR, WAGER_RESULT, WAGER_SUBMIT } from "../../constants/actionTypes";

export interface IWagerState {
	wagerAmount: number;
	isFlipping: boolean;
	predictionIsHeads: boolean;
	resultIsHeads: boolean;
	payoutAmount: number;
	newBalance: number;
	error: string;
}

// Define action type interfaces
interface WagerSubmitAction {
	type: typeof WAGER_SUBMIT;
	data: Record<string, number | boolean>;
}
interface WagerResultAction {
	type: typeof WAGER_RESULT;
	data: Record<string, number | boolean>;
}
interface WagerErrorAction {
	type: typeof WAGER_ERROR;
	data: Record<string, number | boolean>;
}

const initialState: IWagerState = {
	wagerAmount: 0,
	isFlipping: false,
	predictionIsHeads: true,
	resultIsHeads: false,
	payoutAmount: 0,
	newBalance: 0,
	error: ""
};

export type WagerAction = WagerSubmitAction | WagerResultAction | WagerErrorAction;

const wagerReducer = (state: IWagerState = initialState, action: WagerAction) => {
	switch (action.type) {
		case "WAGER_SUBMIT":
			return {
				...state,
				wagerAmount: action.data.wagerAmount as number,
				isFlipping: true,
				predictionIsHeads: action.data.predictionIsHeads as boolean,
				error: ""
			};
		case "WAGER_RESULT":
			return {
				...state,
				isFlipping: false,
				resultIsHeads: action.data.resultIsHeads,
				payoutAmount: action.data.wagerPayout,
				newBalance: action.data.newBalance
			};
		case "WAGER_ERROR":
			return {
				...state,
				isFlipping: false,
				error: action.data.error
			};
		default:
			return state;
	}
};

export default wagerReducer;
