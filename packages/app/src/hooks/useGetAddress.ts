import { useEffect, useState } from "react";
import { providers } from "ethers";

export default function useGetAddress (
    provider: providers.Web3Provider | undefined
) {
    if (!provider) return null;

    const signer = provider.getSigner()
    const address = signer.getBalance()

    return address;
}