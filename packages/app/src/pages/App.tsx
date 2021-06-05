import React, { useState } from 'react';
import WalletModal from '../components/WalletModal';
import useWeb3Modal from '../hooks/useWeb3Modal';
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
