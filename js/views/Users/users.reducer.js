import { REHYDRATE } from "redux-persist/constants";
import { USERS, USERS_LOGIN, USERS_REGISTER } from "./users.types";

export const initialUsersState = {
	inited: null, 
	pending: {
		inited: false,
		users: false,
	},
	currentAccount: [],
};

export const usersReducer = (state = initialUsersState, action = {}) => {
	
	console.log(">>>>>[users.reducer.js]::usersReducer - ", action.type, action);

	switch (action.type) {
		case REHYDRATE: {	// REHYDRATE
			return {
				...state,
				...action.payload.wallet
			};
		}
		case USERS.PENDING: {	// USERS
			return {
				...state,
				inited: 0,
			};
		}
		case USERS.SUCCESS: {
			return {
				...state,
				inited: 1,
				pending: {...state.pending, inited: 1}
			};
		}
		case USERS.ERROR: {
			return {
				...state,
				inited: -1,
			};
		}
		default:
			return state;
	}
};