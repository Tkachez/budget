import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import classes from './Main.module.css';

const Main = () => {
    return(
        <main className={classes.main}>
            <Sidebar />
            <Content />
        </main>
    );
};

export default Main;