import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../Context/AuthContext';

export default function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} />;
}
