import React from 'react';

import { Route } from 'react-router-dom';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const Routes = () => {
  return (
    <div>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterScreen} />
    </div>
  );
};

export default Routes;
