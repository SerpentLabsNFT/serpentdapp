const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const _initBaseURI = 'ipfs://bafybeifswnoqt4vbfkzzcq43lky4qmdpdv6gbvehbrq6u2zhnflhclyu4u/'

async function main() {
  const nftFactory = await hre.ethers.getContractFactory('SerpentLabs')
  const nftContract = await nftFactory.attach(
    '0x2968CC4E63C6c0628e3CCc6857a81B1Fb3556ee0'
  )

  // Calculate merkle root from the whitelist array
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
  const root = merkleTree.getRoot().toString('hex')
  console.log(' Merkleroot is: 0x' + root)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
