import { createStore} from "redux";

const ADD_TODO = "ADD_TODO";

function addtos(text) {
	return {
		type: ADD_TODO,
		text
	};
}

const action = addtos('Learn Redux');

function todos(state={}, action) {
	switch (action.type) {
		case "ADD_TODO":
			return state.concat([action.text]);
		default:
			return state;
	}
}

const store = createStore(todos, [ "use redux ex"] );

let unSubscribe = store.subscribe(() => {
	console.log("----- store.js::subscribe - ", store.getState());
});

store.dispatch({
	type: "ADD_TODO",
	text: "Read the docs"
});
store.dispatch(addtos('Learn Redux'));

unSubscribe(); 

store.dispatch(action);

console.log("----- store.js::store - ", store.getState());

export { store };