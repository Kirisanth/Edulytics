import React from 'react';

class Course extends React.Component {
    render () {
        return <div>{this.props.course.course}</div>;
    }
}

export default Course;