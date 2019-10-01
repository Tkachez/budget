import React from 'react';
import {Input, Label, Select} from './index';
import classes from './FormItem.module.css';

const FormItem = (props) => {

    return (
        <div className={classes.item}>
            <Label for={props.data.id} label={props.data.label}/>
            {props.data.origin === 'input' ? (
                <Input
                    classes={classes.input}
                    onInputChange={props.onChange}
                    type={props.data.type}
                    id={props.data.id}
                />
            ) : (
                <Select
                    onSelectChange={props.onChange}
                    options={props.data.options}
                    id={props.data.id}
                />
            )
            }
        </div>
    );
};

export default FormItem;
