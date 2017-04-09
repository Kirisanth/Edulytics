import React from 'react';
import { connect } from 'react-redux';
import Course from './Course';

class CourseList extends React.Component {
    render () {
        const { courses } = this.props;
        return (
            <div>
                {courses.map((el, i) => {
                    return (
                        <Course key={i} course={el} />
                    );
                })}
            </div>
        );
    }
}

export default connect((state) => state)(CourseList);