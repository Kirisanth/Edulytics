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