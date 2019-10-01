import React, {Component} from 'react';
import FormItem from './FormItem/FormItem';
import classes from './Form.module.css';


export default class Form extends Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            type: 'bill',
            cost: 0,
            comment: ' '
        };
    };

    /**
     *
     * @param event
     */
    handleChange = (event) => {
        let target = event.target;

        if (target.id === 'cost') {
            this.setState({cost: parseFloat(target.value)})
        } else if (target.id === 'comment') {
            this.setState({comment: target.value})
        } else {
            this.setState({type: target.value})
        }
    };

    /**
     *
     * @param event
     */
    handleSubmit = (event) => {
        event.preventDefault();
        let state = this.state;
        alert(`Purchase Type = ${state.type} , Cost = ${state.cost}, Comment = ${state.comment}`);
    };

    /**
     *
     * @type {Array}
     */
    formItems = this.props.form.items.map((item, index) =>
        <FormItem onChange={this.handleChange}
                  data={item}
                  key={index}/>
    );

    /**
     *
     * @return {*}
     */
    render() {
        return (
            <form className={classes.form} onSubmit={this.handleSubmit}>
                <fieldset className={classes.fieldset}>
                    <legend className={classes.legend}>Add purchase</legend>
                    {this.formItems}
                </fieldset>
            </form>
        );
    };
};