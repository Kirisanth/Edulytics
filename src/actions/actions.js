// @flow
export const addCourse = (text : string) => {
  return {
    type: 'ADD_COURSE',
    text
  };
};

//TODO: Need to be able to select by an id, currently using name
export const selectCourse = (id : string) => {
  return {
    type: 'SELECT_COURSE',
    id
  };
};

export const addAssessment = (course : string, assessmentType : string, mark : number, weight : number) => {
  return {
    type: 'ADD_ASSESSMENT',
    course,
    assessmentType,
    mark,
    weight
  };
};