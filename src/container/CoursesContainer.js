import React from 'react';
import { connect } from 'react-redux';
import CourseList from '../component/Course/CourseList';
import AddButton from '../component/Course/AddButton';

class CoursesContainer extends React.Component {
    render () {
        return (
            <div style={this.props.style}>
                <CourseList />
                <AddButton />
            </div>
        );  
    }
}

export default connect()(CoursesContainer);