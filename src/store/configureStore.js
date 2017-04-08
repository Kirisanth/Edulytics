import { combineReducers, createStore, compose } from 'redux';
import { coursesReducer } from '../reducers/reducers';

export var configure = (initialState = {}) => {
	var reducer = combineReducers({
		courses: coursesReducer
	});

	var store = createStore(reducer, initialState, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};