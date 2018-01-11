
import { WALLET, NODE, CONNECT } from "./types";

import willTransitionTo from "../../libs/routerTransition";



export const nodeConnect = (nodes) => {
	return dispatch => {

		dispatch({type: NODE.PENDING});

		// call someting, example api to node
		console.log("+++++[wallet-action.js]::nodeConnect - call api...");

		// router transition
		willTransitionTo(null, null, (res) => {
			console.log("+++++[wallet-action.js]::nodeConnect - route result - ", res);

			dispatch({
				type: NODE.SUCCESS,
				payload: {
					url: res,
					status: 1
				}
			});

		});

	};
};

// listen rpc callback , so node status

export const updateRpcConnectionStatus = (status) => {
	console.log("+++++[wallet-action.js]::updateRpcConnectionStatus - node rpc status - ", status);

	return {
			type: NODE.SUCCESS,
			payload: {
				status: status
			}
	};
};


