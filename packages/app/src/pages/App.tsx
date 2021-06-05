import React, { useState } from 'react';
import logo from '../assets/images/ethereumLogo.png';
import WalletModal from '../components/WalletModal';
import useWeb3Modal from '../hooks/useWeb3Modal';
import './App.css';
import Main from './Main';

function App() {

  const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3Modal();

  // const readContracts = useContractLoader(provider);
  // const greet = useContractReader({
  //   contracts: readContracts, contractName: "Greeter", functionName: "greet"
  // }
  // );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WalletModal provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
        {
          provider && 
          <Main provider={provider} />
        }
      </header>
    </div>
  );
}

export default App;
