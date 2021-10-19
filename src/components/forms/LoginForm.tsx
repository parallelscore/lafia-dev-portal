import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './loginForm.scss';
import logo from './../../images/lafia_logo 1.svg';
import { Link } from 'react-router-dom';
import { History } from 'history';

interface IForm {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  username: string;
  password: string;
  userLabel: string;
  passwordLabel: string;
  loading: boolean;
  history: History;
}

const LoginForm = ({
  passwordLabel,
  userLabel,
  handleChange,
  handleSubmit,
  username,
  password,
  loading,
  history,
}: IForm) => {
  return (
    <div>
      <Col className="form_wrapper myHeight">
        <div className="form_wrapper__content">
          <img className="logo_imgL" src={logo} alt="my logo" />
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
                placeholder="Enter email"
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

            <Button
              onClick={() => history.push('/client-list')}
              className="myLogin-btn margin-form-divider"
              type="submit"
            >
              Log In
            </Button>
          </Form>
          <h4 className="forgot-text">I forgot my password</h4>

          <div className="line-absolute"> </div>

          <div className="form_wrapper-secondary mTop ">
            <h3 className="heading-textLogin">Don't have an account ?</h3>

            <button
              onClick={() => history.push('/register')}
              className="myLogin-secondary"
            >
              Register here
            </button>

            <div className="what-is">
              <Link className="myLinks" to="/">
                Lafia Home
              </Link>
              <Link className="myLinks" to="#">
                What is lafia?{' '}
              </Link>

              <Link className="myLinks" to="#">
                Insurance with Lafia
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default LoginForm;
