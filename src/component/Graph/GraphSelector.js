import React from 'react';

class GraphSelector extends React.Component {
    handleClick() {
            console.log("Selector clicked!");
    }
    render () {
        return (
            <div>
                <div>Graph Selector</div>
                <ul>
                    <li onClick={this.handleClick}>Line Graph</li>
                    <li onClick={this.handleClick}>Pie Graph</li>
                </ul>
            </div>
        );
    }
}

export default GraphSelector;