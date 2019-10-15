import React from 'react';
import Form from './Form/Form';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <section aria-labelledby={props.home.homeForm.form.label} className={classes.home}>
      <h2 id={props.home.homeForm.form.label} className={classes.heading}>Home</h2>
      <Form form={props.home.homeForm.form} dispatch={props.dispatch}/>
    </section>
  );
};

export default Home;