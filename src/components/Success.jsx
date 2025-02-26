import React from "react";
import "./Success.css";
import logo from '../images/logo.svg';

export default function Success() {
    return (
        <div className="success-container">
            <div className="logo-div">
            <img className="logo-img" src={logo} alt="logo"/>
            </div>
            <h1 className="title">TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!</h1>
        </div>
    );
}