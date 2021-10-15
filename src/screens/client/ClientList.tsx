import React from 'react';
import ClientListLayout from '../../Layout/ClientListLayout';
import './pageStyles/clientListPage.scss';
import './../../components/button/reusableButton.scss';
import ReusableButton from '../../components/button/ReusableButton';
import { History } from 'history';

interface IHistory {
  history: History;
}

const ClientList = ({ history }: IHistory) => {
  const clientListText = () => {
    return <h2>Client List</h2>;
  };

  return (
    <ClientListLayout>
      <div className="client">
        <div className="client__top">
          {clientListText()}
          <ReusableButton
            onClick={() => history.push('/create-client')}
            text="New Client"
          />
        </div>
        <div>REUSABLE TABLE AREA</div>
      </div>
    </ClientListLayout>
  );
};

export default ClientList;
