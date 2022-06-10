import React, { Component } from "react";
import Header2 from "../../components/Header2";
import Title from "./Title";
import TableDonation from "./TableDonation";

export default class MinhasDoacoes extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <div className="areaDoadora">
          <Title />
          <TableDonation />
        </div>
      </div>
    );
  }
};
