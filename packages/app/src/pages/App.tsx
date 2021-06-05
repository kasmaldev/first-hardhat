import React, { createContext } from 'react';
import useWeb3Modal from '../hooks/useWeb3Modal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import { providers } from 'ethers';

interface LandingLayoutProps {
  children: JSX.Element;
}

export const ProviderContext = createContext<providers.Web3Provider | undefined>(undefined);


const LandingLayout = ({
  children
}: LandingLayoutProps) => {
  const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3Modal();
  return (
    <ProviderContext.Provider value={provider}>
      <Flex
        direction="column"
        align="center"
        m="0 auto"
      >
        <Header provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal}/>
        {children}
        <Footer />
      </Flex>
    </ProviderContext.Provider>
  );
}


function App() {


  return (
    <div>
      <Router>
        <LandingLayout> 
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </LandingLayout>
      </Router>
    </div>
  );
}

export default App;
