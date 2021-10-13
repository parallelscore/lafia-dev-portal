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
import { Translation } from 'react-i18next';

export default function App() {
  // const langChange = () => {
  //   return i18n.changeLanguage('en-US')
  // }
  return (
    <>
      <Translation>
        {(t, { i18n }) => <p>{t('my translated text')}</p>}
      </Translation>

      <button></button>
    </>
  );
}
