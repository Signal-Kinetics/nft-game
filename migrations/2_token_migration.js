const Token = artifacts.require("Token");

module.exports = async function(deployer) {
    deployer.deploy(Token, "NFT Game", "NFTG");
    let tokenInstance = await Token.deployed();
    await tokenInstance.mint(100, 200, 100000); // Variables for the Pet Token, e.g. `magic'
    let pet = await tokenInstance.getTokenDetails(0);
    console.log(pet);
};