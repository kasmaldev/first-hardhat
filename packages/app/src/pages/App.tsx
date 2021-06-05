import React from 'react';
import WalletModal from '../components/WalletModal';
import useWeb3Modal from '../hooks/useWeb3Modal';
import Main from './Main';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LandingLayoutProps {
  children: JSX.Element;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
    >
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}


function App() {

  const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3Modal();

  return (
    <div>
      <LandingLayout>
        <>
          <WalletModal provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
          {
            provider &&
            <Main provider={provider} />
          }
        </>
        </LandingLayout>
    </div>
  );
}

export default App;
