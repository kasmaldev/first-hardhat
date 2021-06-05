import React from 'react';
import WalletModal from '../components/WalletModal';
import useWeb3Modal from '../hooks/useWeb3Modal';
import Main from './Main';

function App() {

  const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3Modal();

  return (
    <div>
        <WalletModal provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
        {
          provider && 
          <Main provider={provider} />
        }
    </div>
  );
}

export default App;
