import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9ad5d40c5c19bde4ef6894a9223cd6097744ddef'
);

export default instance;