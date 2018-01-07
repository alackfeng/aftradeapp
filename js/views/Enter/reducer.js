import {
  REHYDRATE,
} from 'redux-persist/constants';

import { LOGIN, REGSITER } from "./type";

export const initialState = {
	isAuthenticated: false,
	username: '',
};

export const enterReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case REHYDRATE: {
			return {
				...state,
				isAuthenticated: false,
				...action.payload.enter
			};
		}
		case REGSITER.PENDING: {
			return {
				...state,
				isAuthenticated: false,
			}
		}
		case REGSITER.SUCCESS: {
			return {
				...state,
				isAuthenticated: !state.isAuthenticated,
				...action.payload
			}
		}
		default:
			return state;
	}
};