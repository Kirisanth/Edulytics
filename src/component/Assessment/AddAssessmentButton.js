import React from 'react';
import { connect } from 'react-redux';
import { addAssessment } from '../../actions/actions';

class AddAssessmentButton extends React.Component {
    handleSubmit() {
        const { dispatch, index } = this.props;
        const { course, mark, weight } = this.refs;

        dispatch(addAssessment(index, course.value, mark.value, weight.value));
    }
    render() {
        return (
            <div>
                <input ref="course" placeholder="Assessment"/>
                <input ref="mark" placeholder="Mark"/>
                <input ref="weight" placeholder="Weight"/>
                <div onClick={this.handleSubmit.bind(this)}>AddButton</div>
                <button>Test</button>
            </div>
        );
    }
}

export default connect((state) => state)(AddAssessmentButton);