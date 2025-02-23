import React from "react";
import "./Home.css";
import logo from '../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className="home-container">
      <img className="logo-img" src={logo} alt="logo"/>
      <h1 className="title">KOD ACIKTIRIR <br/> PİZZA, DOYURUR</h1>
      <Button
        className="mainpage-button"
        data-cy="mainpage-button"
        color="warning"
      >
        Acıktım
      </Button>
    </div>
  );
}