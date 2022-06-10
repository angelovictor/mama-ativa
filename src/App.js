import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./style.css";
import AuthService from "./services/authService";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import BoardUser from "./components/Boards/boardUserComponent";
import BoardModerator from "./components/Boards/boardModeratorComponent";
import BoardAdmin from "./components/Boards/boardAdminComponent";
import QuemSomos from "./pages/QuemSomos";
import AreaDoadora from "./pages/AreaDoadora";
import ComoDoar from "./pages/ComoDoar";
import MinhasDoacoes from "./pages/MinhasDoacoes";
import AreaInfantil from "./pages/AreaInfantil";
import Erro from "./pages/Erro";
import Footer from "./components/Footer";
import Contato from "./pages/Contato";
import ResponseContact from "./pages/Contato/ResponseContact";

import AuthVerify from "./common/authVerify";
import EventBus from "./common/eventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/user" component={BoardUser} />
          <Route exact path="/mod" component={BoardModerator} />
          <Route exact path="/admin" component={BoardAdmin} />
          <Route exact path="/quemsomos" component={QuemSomos} />
          <Route exact path="/contato" component={Contato} />
          <Route exact path="/mensagemenviada" component={ResponseContact} />
          <Route exact path="/areadoadora" component={AreaDoadora} />
          <Route exact path="/areainfantil" component={AreaInfantil} />
          <Route exact path="/minhasdoacoes" component={MinhasDoacoes} />
          <Route exact path="/comodoar" component={ComoDoar} />
          <Route exact path="*" component={Erro} />
        </Switch>
        <Footer />
        {<AuthVerify logOut={this.logOut} />}
      </div>
    );
  }
}

export default App;
