import { useCallback, useState } from "react";
import { BigNumber, providers } from "ethers";
import usePoller from "./usePoller";
import useOnBlock from "./useOnBlock";

const DEBUG = false;

export default function useBalance(provider: providers.Web3Provider, address: string, pollTime = 0) {
  const [balance, setBalance] = useState<BigNumber>();

  const pollBalance = useCallback(
    async (provider?: providers.Web3Provider, address?: string) => {
      if (provider && address) {
        const newBalance = await provider.getBalance(address);
        if (newBalance !== balance) {
          setBalance(newBalance);
        }
      }
    },
    [balance],
  );

  // Only pass a provider to watch on a block if there is no pollTime
  useOnBlock(pollTime === 0 ? provider : null, () => {
    if (provider && address && pollTime === 0) {
      pollBalance(provider, address);
    }
  });

  // Use a poller if a pollTime is provided
  usePoller(
    async () => {
      if (provider && address && pollTime > 0) {
        if (DEBUG) console.log("polling!", address);
        pollBalance();
      }
    },
    pollTime,
    provider && address,
  );

  return balance;
}