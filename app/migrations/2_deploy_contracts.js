const DasesUsers = artifacts.require('./DasesUsers.sol');

module.exports = function(deployer) {
    deployer.deploy(DasesUsers);
};
