import { useCallback, useEffect, useState } from "react";
import Web3Modal from "web3modal";

import { providers } from "ethers";

import WalletConnectProvider from "@walletconnect/web3-provider";

const INFURA_ID = process.env.REACT_APP_INFURA_ID;
const NETWORK_NAME = "kovan";
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: INFURA_ID // required
        }
    }
};



function useWeb3Modal(config = {
    autoLoad: true,
    infuraId: INFURA_ID,
    NETWORK: NETWORK_NAME
}) {
    const [provider, setProvider] = useState<providers.Web3Provider>();
    const [autoLoaded, setAutoLoaded] = useState(false);
    const { autoLoad, infuraId, NETWORK } = config;

    const web3Modal = new Web3Modal({
        network: NETWORK,
        cacheProvider: true,
        providerOptions: providerOptions
    });

    const loadWeb3Modal = useCallback(async () => {
        const newProvider = await web3Modal.connect();
        setProvider(new providers.Web3Provider(newProvider));
    }, [web3Modal]);

    const logoutOfWeb3Modal = useCallback(
        async function () {
            web3Modal.clearCachedProvider();
            window.location.reload();
        },
        [web3Modal],
    );

    // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
    useEffect(() => {
        if (autoLoad && !autoLoaded && web3Modal.cachedProvider) {
            loadWeb3Modal();
            setAutoLoaded(true);
        }
    }, [autoLoad, autoLoaded, loadWeb3Modal, setAutoLoaded, web3Modal.cachedProvider]);

    return {
        provider: provider,
        loadWeb3Modal: loadWeb3Modal,
        logoutOfWeb3Modal: logoutOfWeb3Modal
    }
}

export default useWeb3Modal;
