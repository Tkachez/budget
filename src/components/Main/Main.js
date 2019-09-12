import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import main from './Main.module.css'


const Main = () => {
    return(
        <section className={main.main}>
            <Sidebar />
            <Content />
        </section>
    );
};

export default Main;