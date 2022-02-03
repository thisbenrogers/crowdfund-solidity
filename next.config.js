require('dotenv').config()

module.exports = {
  env: {
    MNEMONIC: process.env.MNEMONIC,
    ENDPOINT: process.env.ENDPOINT,
    FACTORY_ADDRESS: process.env.FACTORY_ADDRESS
  }
}