import { useEffect, useState } from "react";
import { BigNumber, providers } from "ethers";

export default function useGetAddress (
    provider: providers.Web3Provider | undefined
) {
    const [address, setAddress] = useState<BigNumber | string>("")

    useEffect(() => {
        if (!provider) return;
        const getAddress = async () => {
            const signer = provider.getSigner()
            setAddress(await signer.getAddress())
        }
        getAddress()
    }, [provider])
    
    console.log({address})

    return address;
}