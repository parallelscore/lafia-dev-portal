import React, { useState } from 'react';
import AuthLayout from '../../Layout/AuthLayout';
import { Col } from 'react-bootstrap';

import LoginForm from '../../components/forms/LoginForm';

const initialState = {
  username: '',
  password: '',
};
const userLabel = 'Username';
const passwordLabel = 'Password';

const LoginScreen = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { username, password } = values;

  const handleChange = (e: { target: { name: string; value: any } }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <AuthLayout>
      <Col>
        <LoginForm
          username={username}
          password={password}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          userLabel={userLabel}
          passwordLabel={passwordLabel}
          loading={loading}
        />
      </Col>
    </AuthLayout>
  );
};

export default LoginScreen;
