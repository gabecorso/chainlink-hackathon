# chainlink-hackathon


## Hardhat Installation
Go to https://hardhat.org/ for a full set of instructions

`npm install --save-dev hardhat`

`npm install --global hardhat-shorthand`

From the project root directory
`npm install`

### Compiling
`npx hardhat compile`

### Hardhat Shorthand
If you'd like to use the shorthand CLI command `hh <your hardhat command>` instead of always calling `npx hardhat <your hardhat command` you can use `npm i -g hardhat-shorthand` to install the shorthand globally

### Contracts
This is where the smart contracts live.
Note you can use console.log() within your smart contract using the hardhat helper! (console.sol)

Currently you can find the Greeter.sol contract as an example to wrap your head around how a smart contract looks before it is deployed 

### Accounts
`npx hardhat accounts`

### Testing
This runs your own blockchain in the backend using the Hardhat Runtime Environment, (you can run this separately with hardhat node).

`npx hardhat test`

### Config Custom Tasks/Functions
You can define your own tasks in the hardhat.config file, you will notice a sample task I wrote to demonstrate this, as well as the hardhat default accounts task
`task('your task name', 'description' async () => {//your function})`


## Environment Variables
you'll need to make sure you fund this wallet with both Kovan ETH and Kovan LINK using the faucets here
KOVAN ETH: https://faucet.kovan.network/
KOVAN LINK: https://kovan.chain.link/

`export PRIVATE_KEY=<your funded private MetaMask key>`

`KOVAN_RPC_URL=https://kovan.infura.io/v3/075a748345714f0d87e806b2e180f237`

## Chainlink

### Chainlink with Hardhat 

`cd chainlink-hardhat-box`
`yarn install`
`hh depoy`

If you want to read more... https://blog.chain.link/using-chainlink-with-hardhat/
