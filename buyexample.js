require('dotenv').config();
const { pumpFunBuy } = require('./swap');

// Accessing environment variables
const payerPrivateKey = process.env.PAYER_PRIVATE_KEY;
const slippageDecimal = parseFloat(process.env.SLIPPAGE_DECIMAL);
const priorityFeeInSol = parseFloat(process.env.PRIORITY_FEE_IN_SOL);


const tokenMintAddress = ''; 
const solIn = 0.001; //amount fo sol you want to buy a token

async function main() {
  try {
    await pumpFunBuy(payerPrivateKey, tokenMintAddress, solIn, priorityFeeInSol, slippageDecimal);
  } catch (error) {
    console.error('Error in pumpFunBuy:', error);
  }
}

main();
