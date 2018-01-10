
import { WALLET, NODE, CONNECT } from "./types";

export const nodeConnect = ({url}) => {
	return dispatch => {

		dispatch({type: NODE.PENDING});

		// call someting, example api to node
		console.log("+++++[wallet-action.js]::nodeConnect - call api...");

		dispatch({
			type: NODE.SUCCESS,
			payload: {
				url: url,
				status: 1
			}
		});
	};
};