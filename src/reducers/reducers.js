export var coursesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COURSE':
			return [
				...state,
				{
					course: action.text
				}
			];
		default:
			return state;
	}
};

export const courseIndexReducer = (state = 0, action) => {
	switch (action.type) {
		case 'SELECT_COURSE':
			return action.id;
		default:
			return state;
	}
};

export const assessmentsReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ASSESSMENT':
			return state;
		default:
			return state;
	}
};