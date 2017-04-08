export var coursesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COURSE':
			console.log('added', action.text);
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