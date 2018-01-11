import { REHYDRATE } from "redux-persist/constants";

import { WALLET, NODE, CONNECT, ACCOUNTSEARCH } from "./types";


export const initialState = {
	url: false,
	status: 0,
	accountsearch: {
		searchTerm: null,
		accounts: []
	}
};

export const walletReducer = (state = initialState, action = {}) => {
	
	console.log("+++++[wallet-reducer.js]::walletReducer - ", action.type, action);

	switch (action.type) {
		case REHYDRATE: {
			return {
				...state,
				...action.payload.wallet
			};
		}
		case NODE.PENDING: {
			return {
				...state,
				url: "null",
				status: 0
			};
		}
		case NODE.SUCCESS: {
			return {
				...state,
				...action.payload
			};
		}
		case NODE.ERROR: {
			return {
				...state,
				url: false,
				status: -1
			};
		}
		case ACCOUNTSEARCH.PENDING: {
			return {
				...state,
				accountsearch: {}
			}
		}
		case ACCOUNTSEARCH.SUCCESS: {
			return {
				...state,
				accountsearch: action.payload
			}
		}
		default:
			return state;
	}
};