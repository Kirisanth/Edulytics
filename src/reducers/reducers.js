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
		case 'EDIT_COURSE_NAME':
			// TODO: Change courseItem to something more meaningful (temp)
			return state.map((courseItem) => {
				// course.name === action.oldCourseName
				if(courseItem.course === action.oldCourseName) {
					return {
						...courseItem,
						course: action.newCourseName
					};
				} else {
					return courseItem;
				}
			});
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
		case 'EDIT_ASSESSMENT':
			return state;
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

//TODO: Incomplete
export const graphSelectorReducer = (state = "", action) => {
	switch (action.type) {
		case 'SELECT_LINE':
			return action.type;
		case 'SELECT_PIE':
			return action.type;
		default:
			return state;
	}
};