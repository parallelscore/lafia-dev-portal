import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './registerForm.scss';
import logo from './../../images/lafia_logo 1.svg';
import { Link } from 'react-router-dom';
import { History } from 'history';

interface IForm {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  handleConfirmPasswordChange: (e: any) => void;
  username: string;
  password: string;
  email: string;
  emailLabel: string;
  userLabel: string;
  passwordLabel: string;
  phoneNumberLabel: string;
  loading: boolean;
  history: History;
  confirmPassword: string;
  confirmPasswordLabel: string;
  phoneNumber: string;
}

const RegisterForm = ({
  passwordLabel,
  userLabel,
  handleChange,
  handleSubmit,
  username,
  password,
  loading,
  history,
  confirmPassword,
  email,
  emailLabel,
  confirmPasswordLabel,
  phoneNumber,
  phoneNumberLabel,
  handleConfirmPasswordChange,
}: IForm) => {
  return (
    <div>
      <Col className="form_wrapper">
        <div className="form_wrapper__content">
          <img className="logo_img" src={logo} alt="my logo" />
          <h3 className="heading-text">Dev Portal</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="margin-form-divider"
              controlId="formBasicEmail"
            >
              <Form.Label>{userLabel}</Form.Label>
              <Form.Control
                value={username}
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group
              className="margin-form-divider"
              controlId="formBasicEmail"
            >
              <Form.Label>{emailLabel}</Form.Label>
              <Form.Control
                value={email}
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group
              className="margin-form-divider"
              controlId="formBasicEmail"
            >
              <Form.Label>{phoneNumberLabel}</Form.Label>
              <Form.Control
                value={phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                type="number"
                placeholder="+234 0000000000"
              />
            </Form.Group>

            <Form.Group
              className="margin-form-divider"
              controlId="formBasicPassword"
            >
              <Form.Label>{passwordLabel}</Form.Label>
              <Form.Control
                value={password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="8 + characters"
              />
            </Form.Group>

            <Form.Group
              className="margin-form-divider"
              controlId="formBasicPassword"
            >
              <Form.Label>{confirmPasswordLabel}</Form.Label>
              <Form.Control
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                name="confirmPassword"
                type="password"
                placeholder="8 + characters"
              />
            </Form.Group>

            <button className="myLogin-btn margin-form-divider" type="submit">
              Register
            </button>
          </Form>
          <h4 className="forgot-text">Already have an account?</h4>

          <div className="form_wrapper-secondary mTop ">
            <button
              onClick={() => history.push('/login')}
              className="myLogin-secondary"
            >
              Login in
            </button>

            <div className="what-is"></div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default RegisterForm;
