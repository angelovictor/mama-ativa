import * as React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/logo1.svg";
import "./header3.css";
import UserMenu from "../../components/UserMenu";

const Header3 = () => {
  return (
    <header className="header3">
      <Link className="logo1" to="/">
        <img src={logo1} alt="Logo Mama Ativa" className="logo" />
      </Link>
      <Link className="menu-options" to='/areadoadora'> Ir para Área Principal </Link>
      <UserMenu />
    </header>
  );
};

export default Header3;
