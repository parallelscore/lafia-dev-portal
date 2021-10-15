import React from 'react';
import ClientListLayout from '../../Layout/ClientListLayout';
import './pageStyles/createClient.scss';
import ReusableButton from '../../components/button/ReusableButton';
import { History } from 'history';
import { Form, Col, Row } from 'react-bootstrap';

import { Select } from 'antd';
interface IHistory {
  history: History;
}

const CreateClient = ({ history }: IHistory) => {
  const createClient = () => {
    return <h2>Full Name</h2>;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Clicked');
  };

  const { Option } = Select;

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  const data = [{ name: 'email:read' }, { name: 'profile:read' }];

  return (
    <ClientListLayout>
      <div className="clientCreate">
        {createClient()}
        <div className="clientCreate__top">
          <Col lg={9} className="d-flex top-items">
            <div>
              <Form.Group
                style={{ width: '13vw' }}
                controlId="formFile"
                className="mb-3"
              >
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
              <p>Scopes &#x2A;</p>

              <Select
                className="selectWidth"
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                // defaultValue={['a10', 'c12']}
                onChange={handleChange}
              >
                {data.map((d) => (
                  <Option value={d.name} key={d.name}>
                    {d.name}
                  </Option>
                ))}
              </Select>
            </div>
          </Col>
        </Row>
      </div>
    </ClientListLayout>
  );
};

export default CreateClient;
