import React from "react";
import "./Home.css";
import logo from '../images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order");
  }
  return (
    <div className="home-container">
      <img className="logo-img" src={logo} alt="logo"/>
      <h1 className="title">KOD ACIKTIRIR <br/> PİZZA, DOYURUR</h1>
      <Button
        className="mainpage-button"
        data-cy="mainpage-button"
        color="warning"
        onClick={handleClick}
      >
        Acıktım
      </Button>
    </div>
  );
}
