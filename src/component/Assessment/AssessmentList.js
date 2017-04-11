import React from 'react';
import { connect } from 'react-redux';
import Assessment from './Assessment';

class AssessmentList extends React.Component {
    render() {
        
        const { courses, index } = this.props;
        const course = courses.find(function(element) { return element.course === index; });
        console.log("AssessmentList", course);
        // let assessment = course.assessment;
        return (
            <div>
                AssessmentList
                {/*{assessment.map((el, i) => {
                    return <Assessment key={i}/>;
                })}*/}
            </div>
        );
    }
}

export default connect((state) => state)(AssessmentList);