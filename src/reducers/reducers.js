export var coursesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COURSE':
			console.log('Added course:', action.text);
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