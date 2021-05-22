import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Establishments from '../pages/Establishments';
import DetailsEstablishment from '../pages/Establishments/Details';
import EditEstablishment from '../pages/Establishments/Edit';
import RegisterEstablishment from '../pages/Establishments/Register';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/establishments" component={Establishments} />
      <Route exact path="/establishments/register" component={RegisterEstablishment} />
      <Route exact path="/establishments/details/:id" component={DetailsEstablishment} />
      <Route exact path="/establishments/edit/:id" component={EditEstablishment} />

    </Switch>
  );
}
