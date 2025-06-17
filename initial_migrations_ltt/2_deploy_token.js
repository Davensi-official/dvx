const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const { time } = require('@openzeppelin/test-helpers');
const LTT = artifacts.require('LTT');

module.exports = async function(deployer, network, accounts) {
  console.log("Account: ",accounts[0]);
  const ownerMultiSign = accounts[0]; //Input the public address of your wallet that will own the token preferably a multisignature one
  const proxyOwner = accounts[0]; //Account that will own the proxy for the token
  const instance = await deployProxy(LTT, [ownerMultiSign], { from:proxyOwner });
  console.log('Deployed LTT Token at', instance.address, " owner ",ownerMultiSign," proxy owner ",proxyOwner);
};