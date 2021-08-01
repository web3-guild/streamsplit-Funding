// deploy/00_deploy_your_contract.js
import { ethers, utils} from "ethers";
import {DeployFunction} from 'hardhat-deploy/types';
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {parseEther} from 'ethers/lib/utils';
import {} from '';
//credits to wighawag/template-ethereum-contracts.
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  
const {deployments , getNamedAccounts} = hre;

const {deploy} = deployments;

//const splitterDeployed = await ethers.getContractFactory()


//const splitterFactoryDeployed = await 

const {splitterAddress , wethDonorAddress ,deployer } = await getNamedAccounts();

await deploy('SplitFactory' , {
    from: deployer,
    args: [splitterAddress , wethDonorAddress],
    log: true

});





};




export default func;
func.tags = ["SplitFactory" , "splitProxy"];
