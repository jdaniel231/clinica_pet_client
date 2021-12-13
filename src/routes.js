import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterScreen from "./screens/auth/register";
import HomeScreen from "./screens/home";
import PetScreen from "./screens/pet/index";
import UserEditScreen from "./screens/users/edit";
import PrivateRoute from './components/auth/private_route'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path="/users/edit" component={UserEditScreen} />
      <PrivateRoute exact path="/pets" component={PetScreen} />
    </Switch>
  </BrowserRouter>
)

export default Routes;