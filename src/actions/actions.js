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