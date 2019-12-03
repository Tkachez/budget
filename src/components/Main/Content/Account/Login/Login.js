import React from 'react';
import classes from './Login.module.css';
import FormItem from "../../../../Elements/FormItem/FormItem";

const Login = (props) => {
    let items = props.formItems.map(item =>
        <FormItem data={item} key={item.id} onChange={props.changeInput}/>);

    return (
        <section className={classes.main}>
            <form onSubmit={props.checkUser} className={classes.form} >
                <fieldset>
                    <legend>Log in</legend>
                    {items}
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
        </section>
    );
};

export default Login;
