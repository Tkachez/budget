import React from 'react';
import Form from './Form';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <section aria-labelledby={props.home.label} className={classes.home}>
      <h2 id={props.home.label} className={classes.heading}>Home</h2>
      <Form form={props.home.form}/>
    </section>
  );
};

export default Home;