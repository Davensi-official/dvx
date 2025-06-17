# BEP 20 Token LordToken LTT Upgrade DVX
Nom Davensi
Symbol DVX
Décimales 9
Standard BEP20
Blockchain Binance Smart Chain
Quantité maximale 2.000.000.000 LTT

- Files:
	- BEP20 Token deploy LTT and upgrade: [Full Migration](initial_migrations_ltt)
	- BEP20 Token DVX upgrade based on address: [DVX Migration](migrations)
	- Full contract flattened: [Contract](DVX_final_contract_flattened.sol)
- Wallet configuration:
	- [In this file](truffle-config.js) development we have a sample for accounts with private key import
	- In the same file, for testnet and bsc the import is based on mnemonic saved in the .secret file
- Usefull commands:
	- truffle compile
	- truffle deploy

- Migrate the token to a given chain:
	- truffle migrate --network [development;testnet;bsc]