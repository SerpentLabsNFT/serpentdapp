require ('@nomiclabs/hardhat-etherscan')
const hre = require( 'hardhat')


const _initBaseURI='ipfs://bafybeifswnoqt4vbfkzzcq43lky4qmdpdv6gbvehbrq6u2zhnflhclyu4u/'

async function main() {

  await hre.run('verify:verify', {
    address: '0x2968CC4E63C6c0628e3CCc6857a81B1Fb3556ee0',
    constructorArguments: [_initBaseURI]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })