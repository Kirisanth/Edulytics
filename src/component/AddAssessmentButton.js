import React from 'react';
import { connect } from 'react-redux';
import { addAssessment } from '../actions/actions';

class AddAssessmentButton extends React.Component {
    handleSubmit() {
        const { dispatch, index } = this.props;
        console.log("t",this.props);
        dispatch(addAssessment(index, this.refs.course.value));
    }
    render() {
        return (
            <div>
                <input ref="course"/>
                <div onClick={this.handleSubmit.bind(this)}>AddButton</div>
                <button>Test</button>
            </div>
        );
    }
}

export default connect((state)=> state)(AddAssessmentButton);