import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './clientList.scss';
import dashboard from './../images/icons/Dashboard.svg';
import Home from './../images/icons/Home.svg';
import LogOut from './../images/icons/Log Out.svg';
import Message from './../images/icons/Message.svg';
import Notification from './../images/icons/Notification.svg';
import Header from '../components/header/Header';
import { relative } from 'path';
import { Link } from 'react-router-dom';
interface IChildren {
  children: JSX.Element | JSX.Element[];
}
const ClientListLayout = ({ children }: IChildren) => {
  return (
    <Container fluid>
      <Row style={{ position: 'relative' }}>
        <Header />
        <Col lg={1} sm={1} xs={1} md={1} className="clientList">
          <div>
            <div className="clientList-icons myTop">
              <img src={Home} alt="dashboard" />
            </div>

            <Link to="/client-list">
              <div className="clientList-icons">
                <img src={dashboard} alt="people-clientlist" />
              </div>
            </Link>

            <div className="clientList-icons">
              <img src={Message} alt="message" />
            </div>
            <div className="clientList-icons">
              {' '}
              <img src={Notification} alt="dashboard" />
            </div>

            <div className="clientList__lastChild clientList-icons">
              <img src={LogOut} alt="logout" />
            </div>
          </div>
        </Col>
        <Col lg={11} md={11} xs={11} sm={11}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default ClientListLayout;
