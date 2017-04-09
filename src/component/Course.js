import React from 'react';
import { connect } from 'react-redux';
import { selectCourse } from '../actions/actions';

class Course extends React.Component {
    handleClick() {
        const { dispatch, course } = this.props;
        dispatch(selectCourse(course.course));
    }
    render () {
        const { course } = this.props;
        return <div onClick={this.handleClick.bind(this)}>{course.course}</div>;
    }
}

export default connect()(Course);