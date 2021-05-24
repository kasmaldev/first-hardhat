# first-hardhat

## Docs
https://hardhat.org/getting-started/

## compile
```console
npx hardhat compile
```
https://hardhat.org/guides/compile-contracts.html


## deploy
```console
npx hardhat node
```

### local
```console
npx hardhat run --network localhost scripts/deploy.js 
```

### kovan
```console
npx hardhat run --network kovan scripts/deploy.js
```

https://hardhat.org/guides/deploying.html

### Verify your contract

```console
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```

https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html