import express from "express";

const app = express();
app.use(express.json());


let ETH_BALANCE = 200;     //Usually these assets are USDC and USDT to avoid impermanent loss
let USDC_BALANCE = 700000;

app.post("/add-liquidity", (req, res) => {

})

//When a user wants to buy an asset(ETH here) from the pool
app.post("/buy-asset", (req, res) => {
    const product = ETH_BALANCE * USDC_BALANCE;
    const quantity = req.body.quantity; // amount of ETH the user wants to buy
    const updatedEthQuantity = ETH_BALANCE - quantity; // new ETH balance in the pool
    const updatedUsdcBalance = product / updatedEthQuantity; // new USDC balance in the pool
    const paidAmount =  updatedUsdcBalance - USDC_BALANCE; // amount of USDC the user has to pay

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;
    res.json ({
        message: `You paid ${paidAmount} USDC for ${quantity} ETH.`
    })
})

app.post("/sell-asset", (req, res) => {
    const product = ETH_BALANCE * USDC_BALANCE;
    const quantity = req.body.quantity; // amount of ETH the user wants to buy
    const updatedUsdcBalance = USDC_BALANCE + quantity; // new ETH balance in the pool
    const updatedEthQuantity = product / updatedUsdcBalance; // new USDC balance in the pool
    const gottenUsdc = USDC_BALANCE - updatedUsdcBalance; // amount of USDC the user has to pay

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;
    res.json ({
        message: `You ${gottenUsdc} USDC for ${quantity} ETH.`
    })
})

app.post("/quote", (req, res) => {

})