import React from 'react';

class Assessment extends React.Component {
    render() {
        const { type, mark, weight } = this.props.data;
        return (
            <div>{`${type}: mark: ${mark} weight: ${weight}`}</div>
        );
    }
}

export default Assessment;