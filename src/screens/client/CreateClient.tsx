import React from 'react';
import ClientListLayout from '../../Layout/ClientListLayout';
import './pageStyles/createClient.scss';
import ReusableButton from '../../components/button/ReusableButton';
import { History } from 'history';
import { Form, Col } from 'react-bootstrap';
interface IHistory {
  history: History;
}

const CreateClient = ({ history }: IHistory) => {
  const createClient = () => {
    return <h2>Full Name</h2>;
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
              <ReusableButton
                onClick={() => history.push('/create-client')}
                text="Create Client"
              />
            </div>
          </Col>
        </div>
        <div>REUSABLE TABLE AREA</div>
      </div>
    </ClientListLayout>
  );
};

export default CreateClient;
