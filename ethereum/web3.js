import Web3 from 'web3';
 
let web3;

// * in the browser, and metamask is injecting web3
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") { 
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // * on the server, or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    process.env.ENDPOINT
  );
  web3 = new Web3(provider);
};
 
export default web3;