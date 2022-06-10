import * as React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/logo1.svg";
import "./header2.css";
import UserMenu from "../../components/UserMenu";

const Header2 = () => {
  return (
    <header lassName="header2">
      <Link className="logo1" to="/">
        <img src={logo1} alt="Logo Mama Ativa" className="logo" />
      </Link>
      <Link className="menu-options" to='/areainfantil'> Ir para Área de Produtos Infantis </Link>
      <UserMenu />
    </header>
  );
};

export default Header2;

