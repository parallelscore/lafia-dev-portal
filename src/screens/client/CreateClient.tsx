import React from 'react';
import ClientListLayout from '../../Layout/ClientListLayout';
import './pageStyles/createClient.scss';
import ReusableButton from '../../components/button/ReusableButton';
import { History } from 'history';
import { Form, Col, Row } from 'react-bootstrap';
interface IHistory {
  history: History;
}

const CreateClient = ({ history }: IHistory) => {
  const createClient = () => {
    return <h2>Full Name</h2>;
  };

  const handleSubmit = () => {
    console.log('Clicked');
  };

  return (
    <ClientListLayout>
      <div className="clientCreate">
        {createClient()}
        <div className="clientCreate__top">
          <Col lg={9} className="d-flex top-items">
            <div>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control className="person" type="file" />
              </Form.Group>
            </div>

            <div>
              <ReusableButton
                onClick={() => history.push('/create-client')}
                text="Upload New"
              />{' '}
              <ReusableButton
                onClick={() => history.push('/create-client')}
                text="Delete Image"
                inverted="inverted"
              />
              <p className="btn-area">
                Your display picture helps people identify you better
              </p>
            </div>
          </Col>{' '}
          <Col lg={3} className="d-flex btn-left-wrapper">
            <div className="btn-left">
              <ReusableButton onClick={handleSubmit} text="Create Client" />
            </div>
          </Col>
        </div>
        <hr className="line" />

        <Row className="formArea">
          <Col lg={6}>
            <div className="formArea__inner__first">
              <div className="formGroupMargin">
                <p>Name &#x2A;</p>
                <input
                  className="formArea__inner__first__input"
                  type="text"
                />{' '}
                <p className="text-area-input">
                  This name would only be used to identify the client in the
                  console and would not be shown to the end users.
                </p>
              </div>

              <div className="formGroupMargin">
                <p>Email (optional)</p>
                <input
                  dir="ltr"
                  className="formArea__inner__first__input"
                  type="email"
                  placeholder="email@email.com"
                />{' '}
              </div>

              <div className="formGroupMargin">
                <p> &#128477; Public Key &#x2A;</p>
                <input
                  placeholder="Enter your name"
                  className="formArea__inner__first__input"
                  type="text"
                />{' '}
              </div>
            </div>
          </Col>
          <Col lg={6} className="formArea__inner-second">
            <div className="formGroupMargin">
              <p>Redirect Uri &#x2A;</p>
              <input
                className="formArea__inner__first__input"
                type="text"
                placeholder="http://"
              />{' '}
            </div>{' '}
            <div className="formGroupMargin">
              <p>Email (optional)</p>
              <input
                className="formArea__inner__first__input"
                type="email"
              />{' '}
            </div>
          </Col>
        </Row>
      </div>
    </ClientListLayout>
  );
};

export default CreateClient;
