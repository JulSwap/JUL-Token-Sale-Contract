var Sale= artifacts.require("./Sale.sol");

module.exports = function(deployer) {
  deployer.deploy(Sale);
};
