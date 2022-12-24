const Fund = artifacts.require("./invoice.sol");

module.exports = function (deployer) {
  deployer.deploy(Fund);
};
