
import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from 'react';
import { SetTokenBalanceAction } from 'store/reducers/tokens';
import { WagerAction } from 'store/reducers/wager';
import { AuthAction } from 'store/reducers/login';
import rootReducer, { RootState } from "./store";
import App from './App';
import './global.css';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);

export type AppAction = AuthAction | SetTokenBalanceAction | WagerAction;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppAction>;


export type AppDispatch = typeof store.dispatch & ((args: AppThunk | AppAction) => AppThunk | AppAction);