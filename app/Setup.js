import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "./App";

import {
  store,
} from "./store";

function Setup(): ReactClass<{}> {

	class Root extends Component {
		render() {
			return (
				<Provider store={store}>
					<App />
				</Provider>
			);
		}
	}
	return new Root;
}

export default Setup;