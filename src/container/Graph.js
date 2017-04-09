import React from 'react';
import { connect } from 'react-redux';

class Graph extends React.Component {
    render () {
        const { courses, index } = this.props;
        const course = courses.find(function(element) { return element.course === index; });
        const name = course?course.course:"";
        return <div style={this.props.style}>{name}Graph Container</div>;
    }
}

export default connect((state) => state)(Graph);