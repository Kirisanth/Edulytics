import React from 'react';
import { connect } from 'react-redux';
import Assessment from './Assessment';

class AssessmentList extends React.Component {
    render() {
        
        const { courses, index } = this.props;
        const course = courses.find(function(element) { return element.course === index; });

        if (course) {
            let assessments = course.assessment;
            return (
                <div>
                    AssessmentList
                    {assessments.map((el, i) => {
                        return <Assessment key={i} data={el}/>;
                    })}
                </div>
            );
        } else {
            return (
                <div>No Data</div>
            );
        }
    }
}

export default connect((state) => state)(AssessmentList);