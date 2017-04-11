export const addCourse = (text) => {
  return {
    type: 'ADD_COURSE',
    text
  };
};

export const selectCourse = (id) => {
  return {
    type: 'SELECT_COURSE',
    id
  };
};

export const addAssessment = (course, assessment) => {
  return {
    type: 'ADD_ASSESSMENT',
    course,
    assessment
  };
};