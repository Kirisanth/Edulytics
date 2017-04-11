import React from 'react';
import Assessment from './Assessment';

class AssessmentList extends React.Component {
    render() {
        return (
            <div>
                AssessmentList
                {[1,2,3,4,5].map((el, i) => {
                    return <Assessment key={i}/>;
                })}
            </div>
        );
    }
}

export default AssessmentList;