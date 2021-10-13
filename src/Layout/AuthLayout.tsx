import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './layout.scss';
interface IChildren {
  children: JSX.Element | JSX.Element[];
}
const AuthLayout = ({ children }: IChildren) => {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} className="layout_wrapper"></Col>
        <Col lg={6}> {children}</Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
