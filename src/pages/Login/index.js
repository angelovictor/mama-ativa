import React, { Component } from "react";
import "../../style.css";
import "./login.css"
import Header1 from "../../components/Header1";
import LoginComponent from "../../components/Login/loginComponent";

export default class Login extends Component {
    render() {
        return (
            <div>
                <Header1 />
                <div>
                    <LoginComponent />
                </div>
            </div>
        );
    }
};
