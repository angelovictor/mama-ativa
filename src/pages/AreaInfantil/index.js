import React, { Component } from "react";
import Header3 from "../../components/Header3";
import CarroselInfantil from "./CarrolselInfantil";
import "./area_infantil.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header3 />
        <div className="areaInfantil">
          <CarroselInfantil />
        </div>
      </div>
    );
  }
};
