require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/PM3seOzgNd307j9jjwrGGt83bg89-iJT",
      accounts: ["504ee714c31b57b0f07d9922d290cba377272ca8deef1519780fc2c2aee750e6"]
    },
  },
};