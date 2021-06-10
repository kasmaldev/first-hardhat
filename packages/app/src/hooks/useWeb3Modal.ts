import { useCallback, useEffect, useMemo, useState } from "react";
import Web3Modal from "web3modal";

import { providers } from "ethers";

import WalletConnectProvider from "@walletconnect/web3-provider";
import { INFURA_KEY } from "../connectors";

const NETWORK_NAME = "kovan";
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: INFURA_KEY // required
        }
    }
};



function useWeb3Modal(config = {
    autoLoad: true,
    NETWORK: NETWORK_NAME
}) {
    const [provider, setProvider] = useState<providers.Web3Provider>();
    const [autoLoaded, setAutoLoaded] = useState(false);
    const { autoLoad, NETWORK } = config;

    const web3Modal = useMemo(() => {
        return new Web3Modal({
        // network: NETWORK, // optional
        cacheProvider: true,
        providerOptions: providerOptions,
        theme: "dark"
    });
    }, [])

    const loadWeb3Modal = useCallback(async () => {
        try {
            const newProvider = await web3Modal.connect();
            setProvider(new providers.Web3Provider(newProvider));
        } catch (e) {
            console.log(e)
        }
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
