import React from 'react';
import { connect } from 'react-redux';
import AssessmentList from '../component/Assessment/AssessmentList';
import AddAssessmentButton from '../component/AddAssessmentButton';

class AssessmentsContainer extends React.Component {
    render () {
        return (
            <div style={this.props.style}>
                Assessments Container
                <AssessmentList />
                <AddAssessmentButton />
            </div>
        );
    }
}

export default connect((state) => state)(AssessmentsContainer);