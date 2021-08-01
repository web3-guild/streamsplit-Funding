import {} from "chai";
import {BigNumber} from "ethers";
import { ethers , waffle } from "ethers";

// generating an demo tree from the scipt ( or fetching and example schema of the demo).


let deploySplitter = async() => {

const SplitterData = await ethers.getContractFactory("Splitter");
const splitterObj = await SplitterData.deploy();
return await splitterObj.deployed();

}


const deployProxyFactory = async (
splitterAddress: string,
fakeWETHAddress: string
) => {
const SplitFactory = await ethers.getContractFactory("SplitFactory");
const proxyFactory = await SplitFactory.deploy(
  splitterAddress,
  fakeWETHAddress
);
return await proxyFactory.deployed();
};

// setting the pdiffrent 





}