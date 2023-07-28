import React, {useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";


function App() {
    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'/page/0'} className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                        1</NavLink></div>
                    <div><NavLink to={'/page/1'} className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                        2</NavLink></div>
                    <div><NavLink to={'/page/2'} className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                        3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}


export default App;
