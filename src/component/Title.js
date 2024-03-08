import React from "react";
import './Title.css';
import Logo from '../image/Logo.png';

function Title () {
    return(
        <>
            <div className="upline"><hr /></div>
            <div className="downline"><hr /></div>
            <img className="logo" src={Logo}/>
            <div className="date">2024.03.01</div>
            <div className="title">MY PORTFOLIO</div>
            <div className="copyright">@copyright<br/>Seyoung Park</div>
        </>
    );
};

export default Title;