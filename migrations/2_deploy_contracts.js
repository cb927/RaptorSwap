const RaptorToken = artifacts.require("RaptorToken");

module.exports = async function(deployer) {

    // Deploy Contracts
    deployer.deploy(RaptorToken);
};
