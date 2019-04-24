# Project 5B: Architect a Blockchain Supply Chain Solution

## Overview
In this project, we'll creating a DApp supply chain solution backed by the Ethereum platform. We will architect smart contracts that manage specific user permission controls as well as contracts that track and verify a product's authenticity.

## Installation
* Go to https://nodejs.org to install **node.js** as our develop environment.(this project version is 8.11.3)
* Go to https://metamask.io to install **Metamask** . **MetaMask** is a bridge that allows you to visit the distributed web of tomorrow in your browser today. It allows you to run Ethereum dApps right in your browser without running a full Ethereum node.
* Go to https://infura.io to register a ID for deploying our smart contract to the rinkeby test network.

## Usage
Install the libarary we want:
`npm install init`
`npm install truffle -g` (this project version is 4.1.15)
`npm install ganache-cli` (this project version is 6.3.0)
`npm install web3` (this project version is 0.20.0)

## UML diagrams for the supply chain:
You can see the for png files as my UML diagrams:
* Activity diagram
* Sequence diagram
* State diagram
* Classes diagram

## Smart contracts :
* **AccessControl** - Collection of Contracts: These contracts manages the various addresses and constraints for operations that can be executed only by specific roles.
* **Base** - SupplyChain.sol: This is where we define the most fundamental code shared throughout the core functionality. This includes our main data storage, constants and data types, plus internal functions for managing these items.
* **Core** - Ownable.sol: is the contract that controls ownership and transfer of ownership.

## Smart contract has associated tests :
At minimum, using `truffle test` to test every function for every function implemented from the Sequence Diagram. For example, from this Sequence Diagram we would need to test 9 functions:
* harvestItem()
* processItem()
* packItem()
* sellItem()
* shiptItem()
* receiveItem()
* purchaseItem()
* fetchItemBufferOne()
* fetchItemBufferTwo()

## Deploy smart contract on a public test network :
Using `truffle migrate --network rinkeby` to deploy your smart contract with the Rinkeby test network. From what I'v done, you can see the transaction addresses and contract addresses at **etherscan** (https://rinkeby.etherscan.io):
* Transaction ID: 0x2af613b579032d2c9386c6f9cc0482306cddd5f5e0b8d377c896228104d1c845 FarmerRole: 0xcf933b8a84dd83b38dde97512f8e33543e3158bd

* Transaction ID: 0x95dae4c57d7ff8e41a4b65689e818124fdc6116cd69e0472444464590d3f7a4f RetailerRole: 0xe02cd0bbec9b6cc1a26f93434b328f68aaf11ed1

* Transaction ID: 0x3614c9cc581358c3143375d33a9db7569c24d17723139455e6f712de97e067cf ConsumerRole: 0xfceae632d7c1cbe7615350fb43659efe8eb15034

* Transaction ID: 0xad190779707bc13457eeca134b6f68d40934fb1a78060ec771a7d7b3b7292dfc SupplyChain: 0x4681dd61e2e1d6d642ad2e81927e5f5f2fc79eec

## Modify client code to interact with smart contract :
Create the frontend that allows your users to interact with your DApp. This should be clean frontend that manages product lifecycle as the product navigates down the supply chain.
Using javascript, create a single JS file with all web3 functions that allows your client code to interact with you smart contracts.

## Big Thanks
This project is supported by Udacity.