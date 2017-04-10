import React from 'react';
import Assessment from '../component/Assessment/Assessment';
import AssessmentList from '../component/Assessment/AssessmentList';

class AssessmentsContainer extends React.Component {
    render () {
        return (
            <div style={this.props.style}>
                Assessments Container
                <Assessment />
                <AssessmentList />
            </div>
        );
    }
}

export default AssessmentsContainer;