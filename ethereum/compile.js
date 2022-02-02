const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// * remove build directory
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// * Read Campaign.sol from contracts/ directory
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');

// * Compile contracts with solidity compiler
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

// * Write output to build/ directory
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  )
}