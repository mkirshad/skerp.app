import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import './styles/App.scss';


function App() {
  const [locale, setLocale] = useState('en');
//   useEffect(() => {
//     document.title = "SK ERP"
//  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}

export default App;
