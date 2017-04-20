import React from 'react';
import { connect } from 'react-redux';
import { selectCourse, changeCourse } from '../../actions/actions';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick() {
        const { dispatch, course } = this.props;
        dispatch(selectCourse(course.course));
    }
    handleChange (event) {
        //TODO: Do I need following line?
        this.setState({value: event.target.value});
        const { dispatch } = this.props;

        const oldCourseName = this.props.index;
        const newCourseName = event.target.value;

        dispatch(changeCourse(oldCourseName, newCourseName));
    }
    handleClick2 (event) {
        //TODO: Do I need following line?
        // this.setState({value: event.target.value});
        const { dispatch } = this.props;

        const oldCourseName = this.props.index;
        const newCourseName = this.refs.test.value;

        dispatch(changeCourse(oldCourseName, newCourseName));
    }
    render () {
        const { course } = this.props;
        return (
            <div onClick={this.handleClick.bind(this)}>
                {course.course}
                {/*<input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />*/}
                <input ref="test" type="text"/>
                <button onClick={this.handleClick2.bind(this)}>CHANGE</button>
            </div>
        );
    }
}

export default connect((state) => state)(Course);