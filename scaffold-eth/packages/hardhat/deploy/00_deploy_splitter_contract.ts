// deploy/00_deploy_your_contract.js
import { utils} from "ethers";
import {DeployFunction} from 'hardhat-deploy/types';
import {HardhatRuntimeEnvironment} from 'hardhat/types';


//credits to wighawag/template-ethereum-contracts.
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
const {deployments , getNamedAccounts} = hre;

const {deploy} = deployments;




}

export default func;
func.tags = ["Splitter"];
