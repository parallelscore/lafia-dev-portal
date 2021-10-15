import React from 'react';
import ClientListLayout from '../../Layout/ClientListLayout';
import './pageStyles/clientListPage.scss';
import './../../components/button/reusableButton.scss';
import ReusableButton from '../../components/button/ReusableButton';
const ClientList = () => {
  const clientListText = () => {
    return <h2>Client List</h2>;
  };

  return (
    <ClientListLayout>
      <div className="client">
        <div className="client__top">
          {clientListText()}
          <ReusableButton text="New Client" />
        </div>
        <div>REUSABLE TABLE AREA</div>
      </div>
    </ClientListLayout>
  );
};

export default ClientList;
