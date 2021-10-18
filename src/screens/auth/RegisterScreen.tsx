import React, { useState } from 'react';
import { Col, Form, Toast } from 'react-bootstrap';
import RegisterForm from '../../components/forms/RegisterForm';
import AuthLayout from '../../Layout/AuthLayout';
import { toast } from 'react-toastify';
const initialState = {
  username: '',
  password: '',
  phoneNumber: '',
  email: '',
};

const userLabel = 'Username';
const emailLabel = 'Email';
const phoneNumberLabel = 'Phone Number';
const passwordLabel = 'Password';
const confirmPasswordLabel = 'Confirm Password';

const RegisterScreen = ({ history }: any) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const { username, password, phoneNumber, email } = values;

  console.log(username, password, phoneNumber, email);

  const handleChange = (e: { target: { name: string; value: any } }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      toast.error('Passwords must be the same');
      return;
    }
  };
  return (
    <AuthLayout>
      <Col>
        {' '}
        <RegisterForm
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          history={history}
          phoneNumberLabel={phoneNumberLabel}
          userLabel={userLabel}
          loading={loading}
          password={password}
          passwordLabel={passwordLabel}
          username={username}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          emailLabel={emailLabel}
          phoneNumber={phoneNumber}
          confirmPasswordLabel={confirmPasswordLabel}
          email={email}
          confirmPassword={confirmPassword}
        />{' '}
      </Col>
    </AuthLayout>
  );
};

export default RegisterScreen;
