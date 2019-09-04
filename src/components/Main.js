import React from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

const Main = () => {
    return(
        <section className="main">
            <Sidebar />
            <Content />
        </section>
    );
};

export default Main;