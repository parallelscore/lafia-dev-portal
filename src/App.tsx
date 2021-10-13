// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { useTranslation } from 'react-i18next';

// function App() {
//   const { Trans } = useTranslation();
//   return (
//     <div className="App">
//       <div>{t('simpleContent')}</div>
//       <Trans i18nKey="userMessagesUnread" count={count}>
//         Hello <strong title={t('nameTitle')}>{{ name }}</strong>, you have{' '}
//         {{ count }} unread message. <Link to="/msgs">Go to messages</Link>.
//       </Trans>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes/Routes';
import './sass/globalStyles.scss';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
