import React from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from './CustomRoutes';

import Dashboard from '../pages/Dashboard';
import Establishments from '../pages/Establishments';
import DetailsEstablishment from '../pages/Establishments/Details';
import EditEstablishment from '../pages/Establishments/Edit';
import RegisterEstablishment from '../pages/Establishments/Register';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute exact path="/register" component={Register} />
      <CustomRoute isPrivate exact path="/profile" component={Profile} />
      <CustomRoute isPrivate exact path="/dashboard" component={Dashboard} />
      <CustomRoute isPrivate exact path="/establishments" component={Establishments} />
      <CustomRoute isPrivate exact path="/establishments/register" component={RegisterEstablishment} />
      <CustomRoute isPrivate exact path="/establishments/details/:id" component={DetailsEstablishment} />
      <CustomRoute isPrivate exact path="/establishments/edit/:id" component={EditEstablishment} />
    </Switch>
  );
}
