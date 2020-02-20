import React from 'react';
import classes from './Home.module.css';
import FormContainer from './Form/FormContainer';

const Home = () => {
  return (
    <section className={classes.home}>
      <h2 className={classes.heading}>Home</h2>
      <FormContainer />
    </section >
  );
};

export default Home;