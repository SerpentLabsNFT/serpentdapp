const hre = require('hardhat')

const _initBaseURI='ipfs://bafybeifswnoqt4vbfkzzcq43lky4qmdpdv6gbvehbrq6u2zhnflhclyu4u/'

async function main() {

  // Deploy the contract
  const serpentLabs = await hre.ethers.getContractFactory('SerpentLabs')
  const SerpentLabs = await serpentLabs.deploy(
    _initBaseURI)
  await SerpentLabs.deployed()

  console.log('SerpentLabs deployed to:', SerpentLabs.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
