import React from 'react';
import AuthLayout from '../../Layout/AuthLayout';
import { Col, Form, Button } from 'react-bootstrap';
import Login from '../../components/forms/Login';
const LoginScreen = () => {
  return (
    <AuthLayout>
      <Col>
        <Login />
      </Col>
    </AuthLayout>
  );
};

export default LoginScreen;
