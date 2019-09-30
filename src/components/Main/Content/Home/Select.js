import React from 'react';
import Option from "./Option";

export default class Select extends React.Component{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    options = this.props.options.map((option, index) =>
        <Option value={option.value} name={option.name} key={index}/>
    );

    handleChange (event){
        this.props.onSelectChange(event.target.value);
    };

    onSelectChange(value) {
        return value;
    }

    render() {
        return (
            <select
                id={this.props.id}
                value={this.props.value}
                name={this.props.name}
                onChange={this.handleChange}
            >{this.options}</select>
        );
    }
};