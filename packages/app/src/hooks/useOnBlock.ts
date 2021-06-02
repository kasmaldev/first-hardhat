import { useEffect, useRef } from "react";
import { providers } from "ethers";

// helper hook to call a function regularly in time intervals
const DEBUG = false;


export default function useOnBlock(
    provider: providers.Web3Provider | null, fn: () => void
) {
    const savedCallback = useRef<() => void | undefined>();
    // Remember the latest fn.
    useEffect(() => {
        savedCallback.current = fn;
    }, [fn]);

    // Turn on the listener if we have a function & a provider
    useEffect(() => {
        if (fn && provider) {
            const listener = (blockNumber: number) => {
                if (DEBUG) console.log(blockNumber, fn, provider);

                if (savedCallback.current) {
                    savedCallback.current();
                }
            };

            provider.on("block", listener);

            return () => {
                provider.off("block", listener);
            };
        }
    }, [fn, provider]);
}