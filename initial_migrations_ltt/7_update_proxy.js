const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const EXISTING_PROXY = artifacts.require('LTT');
const DVX = artifacts.require('DVX');

module.exports = async function(deployer, network, accounts) {
  console.log(accounts)
  await EXISTING_PROXY.deployed();
  const instance = await upgradeProxy(EXISTING_PROXY.address, DVX, { from:accounts[0] });
  console.log("Upgraded", instance);
};