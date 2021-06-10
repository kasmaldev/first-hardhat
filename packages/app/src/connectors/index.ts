import { SupportedChainId } from "../contracts/chains"

export const INFURA_KEY = process.env.REACT_APP_INFURA_KEY

if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}

export const NETWORK_URLS: {
  [chainId in SupportedChainId]: string
} = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ARBITRUM_KOVAN]: `https://kovan5.arbitrum.io/rpc`,
  [SupportedChainId.ARBITRUM_ONE]: `https://arb1.arbitrum.io/rpc`,
}