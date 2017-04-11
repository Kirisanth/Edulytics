import React from 'react';
import { connect } from 'react-redux';
import AssessmentList from '../component/Assessment/AssessmentList';
import AddAssessmentButton from '../component/AddAssessmentButton';

class AssessmentsContainer extends React.Component {
    render () {
        const { course, index } = this.props;
        console.log("PROPS", this.props);

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