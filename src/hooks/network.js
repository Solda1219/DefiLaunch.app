// import binanceCoin from '../images/binance-coin.png';

import dyno from "../images/dyno.png";
import ethCoin from "../images/coins/eth-coin2.png";
import lineaCoin from "../images/coins/linea-coin.png";
import bnbCoin from "../images/coins/bnb-coin.png";
import baseCoin from "../images/coins/base-coin.png";
import zkCoin from "../images/coins/zkSyncIcon.png";



export const supportNetwork = {

  84531: {
    name: "Base Testnet",
    chainId: 84531,
    rpc: "https://base-goerli.public.blastapi.io",
    image: baseCoin,
    symbol: "ETH",
  },
  84532:{
    name: "Base Sepolia Testnet",
    chainId: 84532,
    rpc: "https://sepolia.base.org",
    image: baseCoin,
    symbol: "ETH",
  },

  8453: {
    name: "Base",
    chainId: 8453,
    rpc: "https://mainnet.base.org",
    image: baseCoin,
    symbol: "ETH",
    available: true,

  },
  59144: {
    name: "Linea (soon)",
    chainId: 59144,
    rpc: "https://rpc.linea.build",
    image: lineaCoin,
    symbol: "ETH",
    available: false,

  },
  324: {
    name: "zkSync (soon)",
    chainId: 324, // Make sure the chainId matches the network
    rpc: "https://mainnet.era.zksync.io",
    image: zkCoin,
    symbol: "ETH",
    available: false,

  },
  300: {
    name: "zkSync Testnet (soon)",
    chainId: 300, // Make sure the chainId matches the network
    rpc: "https://zksync-era-sepolia.blockpi.network/v1/rpc/public",
    image: zkCoin,
    symbol: "ETH",
    available: false,
 },

  default:{
    name: "Base",
    chainId: 8453,
    rpc: "https://mainnet.base.org",
    image: baseCoin,
    symbol: "ETH",
    available: true,

  },
};

export const networkLists = [
  // { code: 0, chainId: 97, label: "BNB", image: bnbCoin, available: false },
  { order: 1, chainId: 8453, label: "BASE", image: baseCoin, available: true },
 //  { order: 2, chainId: 84531, label: "BASE Testnet", image: baseCoin, available: false },
  { order: 3, chainId: 59144, label: "Linea", image: lineaCoin, available: false },
  { order: 4, chainId: 324, label: "zkSync", image: zkCoin, available: false },
  { order: 5, chainId: 300, label: "zkSync Testnet", image: zkCoin, available: false },
]

export const sortedNetworkLists = networkLists.sort((a, b) => a.order - b.order);

export const RPC_URLS = {
  97: "https://data-seed-prebsc-1-s1.binance.org:8545",
  84531: "https://base-goerli.public.blastapi.io",
  84532: "https://sepolia.base.org",
  8453: "https://mainnet.base.org",
  59144: "https://rpc.linea.build",
  324: "https://mainnet.era.zksync.io",
  300: "https://sepolia.era.zksync.dev",
};
