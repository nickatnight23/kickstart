import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa056B4C2f46665C9810ebd850A3b8F600BA98A73'
);

export default instance;