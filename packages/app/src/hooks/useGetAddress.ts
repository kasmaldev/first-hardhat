import { useEffect, useState } from "react";
import { BigNumber } from "ethers";

export default function useGetAddress (
    signer: any
) {
    const [address, setAddress] = useState<BigNumber | string>("")

    useEffect(() => {
        if (!signer) return;
        const getAddress = async () => {
            setAddress(await signer.getAddress())
        }
        getAddress()
    }, [signer])
    
    return address;
}