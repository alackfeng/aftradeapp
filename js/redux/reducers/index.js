import {
  combineReducers,
} from 'redux';

import AppNavigator from '../../components/AppNavigator';

import transient from '../reducers/transient';
import home from '../../views/Home/reducer';
import { enterReducer } from "../../views/Enter/reducer";
import { walletReducer } from "../../views/Wallet/wallet.reducer";
import { settingsReducer } from "../../views/Wallet/settings.reducer";
import { usersReducer } from "../../views/Users/users.reducer";

export default combineReducers({
  transient,
  nav: (state, action) => {
    return AppNavigator.router.getStateForAction(action, state) || state;
  },
  home,
  enter: enterReducer,
  wallet: walletReducer,
  settings: settingsReducer,
  users: usersReducer, 
});
