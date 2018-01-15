
import { USERS, USERS_LOGIN, USERS_REGISTER } from "./users.types";

import UsersBox  from "./users.box";

export const init = () => {
	return dispatch => {
		dispatch({type: USERS.SUCCESS});
	};
};

export const createAccount = 
	(account_name, password, registrar, referrer, referrer_percent, refcode) => {

	return dispatch => {

		dispatch({type: USERS_REGISTER.PENDING});


		// call api register
		return UsersBox.createAccountWithPassword(account_name, password, registrar, referrer, referrer_percent, refcode)
			.then((res) => {
				
				console.log("=====[users.actions.js]::createAccount - ", res);
				// store sucess
				dispatch({
					type: USERS_REGISTER.SUCCESS,
					payload: {
						account_name: account_name
					}
				});

				// 
				return account_name;
			});

	};
};