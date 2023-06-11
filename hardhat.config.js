require("@nomicfoundation/hardhat-toolbox")
require("dotenv")

module.exports = {
    solidity: "0.8.18",
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
}
