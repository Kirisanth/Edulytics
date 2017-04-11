export var coursesReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COURSE':
			return [
				...state,
				{
					course: action.text,
					assessment: []
				}
			];
		case 'ADD_ASSESSMENT':
			return state.map((course) => {
				if(course.course === action.course) {				
					return {
						...course,
						assessment: [...course.assessment,action.assessment]
					};
				} else {
					return course;
				}
			});
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