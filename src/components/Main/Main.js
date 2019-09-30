import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import classes from './Main.module.css';

const Main = (props) => {
    return(
        <main className={classes.main}>
            <Sidebar />
            <Content content={props.main.content} />
        </main>
    );
};

export default Main;