import React, {useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import styled from "styled-components";

function App() {
    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper><NavLink to={'/page/0'}>PAGE 1</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={'/page/1'}>PAGE 2</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={'/page/2'}>PAGE 3</NavLink></NavWrapper>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default App;

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`