import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import SignUpPage from "./SignUp/SignUp";
import SignInPage from "./SignIn/SignIn";
import PasswordForgetPage from "./PasswordForget/PasswordForget";
import HomePage from "./Home/Home";
import AccountPage from "./Account/Account";
import Page404 from "./Page404/Page404";

import * as routes from "../constants/routes";
import { firebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    })
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <Navigation authUser={this.state.authUser} />
          <Switch>
            <Route exact path={routes.SIGN_UP} component={SignUpPage} />
            <Route exact path={routes.SIGN_IN} component={SignInPage} />
            <Route
              exact
              path={routes.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route exact path={routes.HOME} component={HomePage} />
            <Route exact path={routes.ACCOUNT} component={AccountPage} />
            <Route component={Page404} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
