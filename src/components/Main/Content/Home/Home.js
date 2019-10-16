import React from 'react';
import Form from './Form/Form';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <section className={classes.home}>
      <h2 className={classes.heading}>Home</h2>
      <Form form={props.home.homeForm.form} dispatch={props.dispatch}/>
    </section >
  );
};

export default Home;