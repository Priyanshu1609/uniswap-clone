require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/VsUuFQTF1nb_Vri2VoJeVZZICzP6F3gN',
      accounts: ['9916b9f39c79ea56ad8e805fc4ed4356fcd93fe6f8721399d866c0c4d9db06e2']
    },
  },
}
