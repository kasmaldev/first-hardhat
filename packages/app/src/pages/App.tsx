import React from 'react';
import logo from '../assets/images/ethereumLogo.png';
import Balance from '../components/Balance';
import WalletModal from '../components/WalletModal';
import useWeb3Modal from '../hooks/useWeb3Modal';
import './App.css';
import { useUserAddress } from "eth-hooks";
import { providers } from 'ethers';
import useGetAddress from '../hooks/useGetAddress';

function App() {

  const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3Modal();
  const address = useGetAddress(provider);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <WalletModal />
        <Balance provider={provider} address={address} />
      </header>
    </div>
  );
}

export default App;
