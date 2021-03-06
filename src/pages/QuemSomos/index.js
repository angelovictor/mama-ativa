import React, { Component } from "react";
import Header1 from "../../components/Header1";
//import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import geladeiraBL from "../../images/geladeira.jpg";
import bebePB from "../../images/bebepB.jpg";
import banner2 from "../../images/banner2.svg";

export default class QuemSomos extends Component {
  //const theme = useTheme();
  render() {
    return (
      <div>
        <Header1 />
        <div>
          <img src={banner2} alt='Banner2' className='banner2' />
          <h1 style={{ marginTop: '30px', marginBottom: '0px', fontFamily: 'Hammersmith One', fontSize: '38px', color: '#FFF' }}>
            Gente simples, <br /> fazendo coisas pequenas, <br />
            em lugares pouco importantes,<br />
            consegue mudanças extraordinárias!
          </h1>
          <span style={{ marginTop: '5px', color: '#FFF' }}>Provérbio Africano</span>
        </div >
        <Card
          sx={{ display: "flex" }}
          style={{ backgroundColor: "#f1f1f1", height: "300px" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography
                component="div"
                variant="h5"
                style={{ marginTop: "40px", fontFamily: 'Quicksand', marginLeft: '30px' }}
              >
                Nossa História
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                style={{ fontFamily: "Quicksand", marginLeft: '30px' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />{" "}
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                <br /> Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            style={{ marginLeft: "50px" }}
            component="img"
            sx={{ width: 400 }}
            image={geladeiraBL}
          />
        </Card>

        <Card
          sx={{ display: "flex" }}
          style={{ backgroundColor: "#C7CBF3", height: "350px" }}
        >
          <CardMedia
            style={{ marginLeft: "50px" }}
            component="img"
            sx={{ width: 400 }}
            image={bebePB}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography
                component="div"
                variant="h5"
                style={{ marginTop: "40px", fontFamily: 'Quicksand' }}
              >
                Nossa Missão
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                style={{ fontFamily: "Quicksand" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
                <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />{" "}
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                <br /> Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </div>
    );
  }
};
