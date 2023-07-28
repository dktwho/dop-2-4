import React, {useEffect, useState} from 'react';
import './App.css';
import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import {S} from '../src/styles/_appStyles'


function App() {


    const size = useWindowSize()

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(0);
        useEffect(() => {

            function handleResize() {
                setWindowSize(window.innerWidth);
            }

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }


    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {size > 1000
                    ? <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'}>PAGE 1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>PAGE 2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>PAGE 3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/protected'}>PAGE Protected</NavLink></S.NavWrapper>
                    </div>
                    : <div></div>
                }

                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default App;

