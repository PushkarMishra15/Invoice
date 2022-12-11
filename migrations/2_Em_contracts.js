const Fund = artifacts.require("./Em_trans.sol");

module.exports = function (deployer) {
  deployer.deploy(Fund);
};
