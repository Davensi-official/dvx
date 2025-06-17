const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const EXISTING_PROXY = "0x13D6988A542DB14aDb4C7E2f4E91c14DB971630A";
const DVX = artifacts.require('DVX');

module.exports = async function(deployer, network, accounts) {
  console.log(accounts)
  const instance = await upgradeProxy(EXISTING_PROXY, DVX, { from:accounts[0] });
  console.log("Upgraded", instance);
};