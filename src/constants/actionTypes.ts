import { Action, ThunkAction } from "@reduxjs/toolkit";
import { SetTokenBalanceAction } from "store/reducers/tokens";
import { WagerAction } from "store/reducers/wager";
import { AuthAction } from "store/reducers/login";
import { RootState } from "store";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_TOKEN_BALANCE = "SET_TOKEN_BALANCE";
export const WAGER_SUBMIT = "WAGER_SUBMIT";
export const WAGER_RESULT = "WAGER_RESULT";
export const WAGER_ERROR = "WAGER_ERROR";

export type AppAction = AuthAction | SetTokenBalanceAction | WagerAction;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;