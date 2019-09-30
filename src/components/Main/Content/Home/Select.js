import React from 'react';
import Option from "./Option";

export default class Select extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    options = this.props.options.map((option, index) =>
        <Option value={option.value} name={option.name} key={index}/>
    );

    handleChange = (event) => {
        this.setState({selectValue: event.target.value})
    };

    render() {
        return (
            <select value={this.state.selectValue} onChange={this.handleChange}>
                {this.options}
            </select>
        );
    }
};