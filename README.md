# Off-chain Decentralised Exchange and AMM Simulator – Node.js, Express & TypeScript

This project is an off-chain simulation of an Automated Market Maker (AMM) inspired by Uniswap v2 and a Decentralized Exchange based on AMM.
It is built to deeply understand DEX internals, pricing mechanics, and liquidity behavior before implementing them on-chain in Solidity.
Unlike order-book exchanges, this DEX uses mathematical pricing driven entirely by liquidity pools.


## Core AMM 

Constant Product Formula
 - x * y = k
 - x = reserve of Token A
 - y = reserve of Token B
 - k = constant liquidity invariant
 - Swaps adjust reserves while keeping k approximately constant.


## Price Impact

Large trades cause slippage, since prices move along the curve.


## Features

 - AMM-based token swaps
 - Buy / sell assets
 - Liquidity pool creation
 - Add / remove liquidity
 - Reserve & balance tracking
 - Slippage-aware pricing
 - REST APIs for interaction
 - Fully type-safe codebase


## Tech Stack

 - Node.js
 - Express
 - TypeScript


## Setup

 - npm install
 - npm run dev


## Goal

Build a strong foundation in DEX mechanics, AMM math, and backend architecture before moving to Solidity-based on-chain exchanges.






