import React from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions/actions';

class AddButton extends React.Component {
    handleSubmit() {
        const { dispatch } = this.props;
        dispatch(addCourse('Math'));
    }
    render() {
        return <div onClick={this.handleSubmit.bind(this)}>AddButton</div>;
    }
}

export default connect()(AddButton);