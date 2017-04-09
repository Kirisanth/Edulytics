import React from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions/actions';

class AddButton extends React.Component {
    handleSubmit() {
        const { dispatch } = this.props;
        dispatch(addCourse(this.refs.course.value));
    }
    render() {
        return (
            <div>
                <input ref="course"/>
                <div onClick={this.handleSubmit.bind(this)}>AddButton</div>
            </div>
        );
    }
}

export default connect()(AddButton);