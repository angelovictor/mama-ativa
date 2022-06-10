import React, { Component } from "react";
import Header2 from "../../components/Header2";
import CarroselDoadora from "./CarroselDoadora";
import "./areaDoadora.css";

export default class AreaDoadora extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <div className="areaDoadora">
          <CarroselDoadora />
        </div>
      </div>
    );
  }
};
