import React, { Component } from "react";
import "../../style.css";
import "./cadastro.css"
import Header1 from "../../components/Header1";
import RegisterComponent from "../../components/Register/registerComponent";

export default class Login extends Component {
    render() {
        return (
            <div>
                <Header1 />
                <div>
                    <RegisterComponent />
                </div>
            </div>
        );
    }
};
