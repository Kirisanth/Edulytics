import React from 'react';
import { connect } from 'react-redux';
import Course from '../component/Course';
import AddButton from '../component/AddButton';

class Courses extends React.Component {
    render () {
        return (
            <div style={this.props.style}>
                Courses Container
                {[1,2,3,4,5].map((el, i) => {
                    return (
                        <Course key={i}/>
                    );
                })}
                <AddButton />
            </div>
        );  
    }
}

export default connect()(Courses);