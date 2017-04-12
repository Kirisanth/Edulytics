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

					let assessment = {
						type: action.assessmentType,
						mark: 10,
						weight: 10
					};

					return {
						...course,
						assessment: [...course.assessment, assessment]
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