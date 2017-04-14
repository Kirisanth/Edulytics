import React from 'react';
import { connect } from 'react-redux';

import Graph from '../component/Graph/Graph';
import GraphSelector from '../component/Graph/GraphSelector';

class GraphContainer extends React.Component {
    render () {
        const { courses, index } = this.props;
        const course = courses.find(function(element) { return element.course === index; });
        const name = course?course.course:"";
        return (
            <div style={this.props.style}>
                <div>Graph Container</div>
                <div>{name}</div>
                <pre>{JSON.stringify(course)}</pre>
                <Graph />
                <GraphSelector />
            </div>
        );
    }
}

export default connect((state) => state)(GraphContainer);