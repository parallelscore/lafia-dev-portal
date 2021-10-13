import React from 'react';
import { Route } from 'react-router-dom';
import LoginScreen from '../screens/auth/LoginScreen';

const Routes = () => {
  return (
    <div>
      <Route exact path="/login" component={LoginScreen} />
    </div>
  );
};

export default Routes;
