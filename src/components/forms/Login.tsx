import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './loginForm.scss';
import logo from './../../images/lafia_logo 1.svg';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <Col className="form_wrapper">
        <div className="form_wrapper__content">
          <img className="logo_img" src={logo} alt="my logo" />
          <h3 className="heading-text">Dev Portal</h3>
          <Form>
            <Form.Group
              className="margin-form-divider"
              controlId="formBasicEmail"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group
              className="margin-form-divider"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="8 + characters" />
            </Form.Group>

            <Button className="myLogin-btn margin-form-divider" type="submit">
              Log In
            </Button>
          </Form>
          <h4 className="forgot-text">I forgot my password</h4>

          <div className="line-absolute"> </div>

          <div className="form_wrapper-secondary mTop ">
            <h3 className="heading-text">Don't have an account ?</h3>

            <button className="myLogin-secondary">Register here</button>

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

export default Login;
