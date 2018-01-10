import { REHYDRATE } from "redux-persist/constants";

import { WALLET, NODE, CONNECT } from "./types";


export const initialState = {
	url: false,
	status: 0
};

export const walletReducer = (state = initialState, action = {}) => {
	
	//console.log("+++++[wallet-reducer.js]::walletReducer - ", action.type, action);

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
		default:
			return state;
	}
};