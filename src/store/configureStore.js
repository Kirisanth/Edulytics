import { combineReducers, createStore, compose } from 'redux';
import { coursesReducer, courseIndexReducer } from '../reducers/reducers';

export var configure = (initialState = {}) => {
	var reducer = combineReducers({
		courses: coursesReducer,
		index: courseIndexReducer
	});

	var store = createStore(reducer, initialState, compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};