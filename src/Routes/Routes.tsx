import React from 'react';

import { Route } from 'react-router-dom';
import ClientList from '../screens/auth/ClientList';
import LoginScreen from '../screens/auth/LoginScreen';
import MyTable from '../screens/auth/MyTable';
import RegisterScreen from '../screens/auth/RegisterScreen';

const Routes = () => {
  return (
    <div>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path={['/', '/home']} component={MyTable} />
      <Route exact path={['/client-list', '/list']} component={ClientList} />
    </div>
  );
};

export default Routes;
