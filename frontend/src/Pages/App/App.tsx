import React from 'react';
import Routes from '../../Routes/Routes';
import Header from '../../Components/Layout/Header/Header';
import Footer from '../../Components/Layout/Footer/Footer';
import AppContextProvider from './AppContextProvider';

import './App.css';

const App: React.FC<{}> = () => {
  return (
    <AppContextProvider>
      <Header />
      <Routes />
      <Footer />
    </AppContextProvider>
  );
};

export default App;
