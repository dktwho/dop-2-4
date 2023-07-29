import React from 'react';
import './App.css';
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import styles from "./components/Site.module.css";
import {S} from '../src/styles/_appStyles'
import {useWindowSize} from "./routes/useWindowSize";

function App() {

    const location = useLocation();
    const navigate=useNavigate()

    if(location.pathname==='/'){
        navigate('/page/0')
    }

    const size = useWindowSize()

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

