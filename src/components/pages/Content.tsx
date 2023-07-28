import React from 'react';
import {useNavigate} from "react-router-dom";

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props
    const navigate = useNavigate()
    const onClickMainPageHandler = () => {
        navigate('/page/0')
    }

    const onClickComebackHandler = () => {
        navigate(-1)
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={onClickMainPageHandler}>Main page</button>
            <button onClick={onClickComebackHandler}>Comeback</button>
        </div>
    );
};

