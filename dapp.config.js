const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
  title: 'SerpentLabs dapp',
  description: 'SerpentLaps minting Dapp',
  contractAddress: '0x2968CC4E63C6c0628e3CCc6857a81B1Fb3556ee0',
  maxMintAmount: 4,
  WlMaxMintAmount: 2,
  firstCost :0 ,
  wlcost: 0.008,
  publicSalePrice:0.008
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 1, // mainnet
  darkMode: true,
  walletSelect: {
    description:'Please select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: false,
        rpcUrl: RPC_URL,
        appName: 'weRjapaneseTest01 Dapp'
      },
      
      
      { walletName: 'gnosis'},
      { walletName: 'authereum' },

      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: 'weRjapaneseTest01 Dapp'
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }