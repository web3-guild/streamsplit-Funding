const { utils } = require("ethers");
const fs = require("fs");
const chalk = require("chalk");

require("@nomiclabs/hardhat-waffle");
require("@tenderly/hardhat-tenderly");

require("hardhat-deploy");

require("@eth-optimism/hardhat-ovm");
require("@nomiclabs/hardhat-ethers");

import { apiKey } from "config/deployerParams";
import {HardhatUserConfig, task} from "hardhat/config";
import "@nomiclabs/hardhat-web3";
const { isAddress, getAddress, formatUnits, parseUnits } = utils;

/*
      📡 This is where you configure your deploy configuration for 🏗 scaffold-eth

      check out `packages/scripts/deploy.js` to customize your deployment

      out of the box it will auto deploy anything in the `contracts` folder and named *.sol
      plus it will use *.args for constructor args
*/

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000
      }
    }
  },
  typechain: {
      outDir: 'ts-types/contracts',
      target: 'ethers-v5'
  },

  networks: {
    mumbai : process.env.POLYGON_NODE_URI,
    accounts: 

    } , 


    paths: {
      sources: "./contracts",
      tests: "./test",
      artifacts: "./artifacts"
    },





}



task("balance" , "gets the ethereum balance of the splitter").setAction(


)