import React, { Component } from "react";
import "./contato.css";
import Header1 from "../../components/Header1";
//import { Link } from "@mui/material";
import ResponseImage from "../../images/feedback-contact.png";

export default class ResponseContact extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <div
          className="contatoContainer"
          style={{ marginBottom: "150px", marginTop: "80px" }}
        >
          <img src={ResponseImage} alt="Feedback contato" />
          <span>
            Agradecemos seu contato! Em breve, nossa equipe te responderá.
          </span>
        </div>
      </div>
    );
  }
};