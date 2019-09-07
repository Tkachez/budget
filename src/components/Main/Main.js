import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import './Main.module.css'


const Main = () => {
    return(
        <section className="main">
            <Sidebar />
            <Content />
        </section>
    );
};

export default Main;