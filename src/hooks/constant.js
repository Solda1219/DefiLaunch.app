export const trimAddress = (addr) => {
  return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
};

export const coinArray = {
  97: "BNB",
  8453: "ETH",
  84531: "ETH",
  59144: "ETH",
  324: "ETH",
  300: "ETH",
};

export const convertDay = (mins) => {
  if (parseInt(mins) < 60)
    return mins + " mins";
  else if (parseInt(mins) < 1440)
    return Math.floor(mins/60) + " hrs " + (mins % 60) + " mins";
  else if (parseInt(mins) < 1440) {
    let days = Math.floor(mins/1440);
    let hours = Math.floor((mins - days * 1440) / 60);
    let minutes = mins % 60;
    return days + " days " + hours + " hours " +  minutes + " mins";
  }
}

export const contract = {
  //Update Contracts and Router on 59144 aka Linea. Currently copied from 8453 aka Base

//  59144: {
//    poolfactory: "0x722A86477C65a1989EC8D40429535EAb1Fef6079",
//    poolmanager: "0x04974b1D189573113F1da25e0A4Df9db2912Edec",
//    routeraddress: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
//    multicallAddress: "0x519d319dfe534bc91977c754f740604a284e3bca",
//    lockAddress: "0xe2a923C6F4e10BcFd72873a80eA4BAa13C95B18B",
//    routername: "PancakeSwap",
//    feeReceiver: "0xCE035af21b4697101Aaf12C261bc6C79b0e38271",
//    dividendTracker: "0xA9d956d92432460a0FA8d2A27BE33859830705ec",
//  },

  //Update Contracts and Router on 324 aka zkSync. Currently copied from 8453 aka Base

// 300: {
//   poolfactory: "0xF82212918E3C5C893a91CbdF4aB7fE032Fb2c762",
//   poolmanager: "0x7C0D0C99c9d83aEB96e9c214b88BC04A7D8C00A3",
//   routeraddress: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
//   multicallAddress: "?",
//   lockAddress: "0x9F5FC3Ab7D9F930d66519F4C7d5632202e5E655B",
//   routername: "PancakeSwap",
//   feeReceiver: "0xCE035af21b4697101Aaf12C261bc6C79b0e38271",
//  dividendTracker: "?",
// },

//  324: {
//    poolfactory: "0x722A86477C65a1989EC8D40429535EAb1Fef6079",
//    poolmanager: "0x04974b1D189573113F1da25e0A4Df9db2912Edec",
//    routeraddress: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
//    multicallAddress: "0x519d319dfe534bc91977c754f740604a284e3bca",
//    lockAddress: "0xe2a923C6F4e10BcFd72873a80eA4BAa13C95B18B",
//    routername: "PancakeSwap",
//    feeReceiver: "0xCE035af21b4697101Aaf12C261bc6C79b0e38271",
//    dividendTracker: "0xA9d956d92432460a0FA8d2A27BE33859830705ec",
//  },

  8453: {
    poolfactory: "0x722A86477C65a1989EC8D40429535EAb1Fef6079",
    poolmanager: "0x04974b1D189573113F1da25e0A4Df9db2912Edec",
    routeraddress: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
    multicallAddress: "0x519d319dfe534bc91977c754f740604a284e3bca",
    lockAddress: "0xe2a923C6F4e10BcFd72873a80eA4BAa13C95B18B",
    routername: "PancakeSwap",
    feeReceiver: "0xCE035af21b4697101Aaf12C261bc6C79b0e38271",
    dividendTracker: "0xA9d956d92432460a0FA8d2A27BE33859830705ec",
  },
  84531: {
    poolfactory: "0x86841b1Edc2e85188463b04294f969B263C41eA2",
    poolmanager: "0x0c70E854F57b38561E72f82e4Fd29eE696441fE9",
    routeraddress: "0x48ec46497ad59acaba41545363cf36fe77786fa7",
    multicallAddress: "0x18540e2a38e3f7eae2a543b572e80304c70965a3",
    lockAddress: "0x1611C1660cC0A59c6a7567Cc50f67A25C0b00bb8",
    routername: "Pancakeswap",
    feeReceiver: "0xCE035af21b4697101Aaf12C261bc6C79b0e38271",
    dividendTracker: "0xa2532b333215a3330a79609bba0d6a21c9d188f1",
  },
 
 
  97: {
    poolfactory: "0xe90321bf32a9c1ee284cdd849ed4c37da940d54c",
    poolmanager: "0xc5027079d74def9644f605fe4b65adc5340585ef",
    routeraddress: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3",
    multicallAddress: "0x6e5bb1a5ad6f68a8d7d6a5e47750ec15773d6042",
    lockAddress: "0x654a68baf4a4dbab4af5548bbbed910af40078ad",
    routername: "Pancakeswap",
    feeReceiver: "0xCE035af21b4697101Aaf12C261bc6C79b0e38271",
    dividendTracker: "0x5c7f05a5fb26adeb304b8a8695aabc9b6e7ca037",
  },
  default: {
    poolfactory: "0x722A86477C65a1989EC8D40429535EAb1Fef6079",
    poolmanager: "0x04974b1D189573113F1da25e0A4Df9db2912Edec",
    routeraddress: "0x8cFe327CEc66d1C090Dd72bd0FF11d690C33a2Eb",
    multicallAddress: "0x519d319dfe534bc91977c754f740604a284e3bca",
    lockAddress: "0xe2a923c6f4e10bcfd72873a80ea4baa13c95b18b",
    routername: "PancakeSwap",
    feeReceiver: "0xCE035af21b4697101Aaf12C261bc6C79b0e38271",
    dividendTracker: "0xA9d956d92432460a0FA8d2A27BE33859830705ec",
  },
};

// BSC
// MultiCall:       0x6e5bb1a5ad6f68a8d7d6a5e47750ec15773d6042
// BabyToken:       0x5c7f05a5fb26adeb304b8a8695aabc9b6e7ca037
// PresalePool:     0x1b03d864c4a93ef2ae2748bc8949017825809d64
// PrivatePool:     0x368a017dcfa89f7a1db1c37b145791caf40cfd53  

// FairPool:        0x474959a744be23595de1d05648a71d5815472a8d
// TokenLocker:     0x654a68baf4a4dbab4af5548bbbed910af40078ad

// ProxyAdmin:      0xb0d5f7bdf5aec4f953cf956a09432cfd004e0e25

// PoolManager Im:  0xf912e9FdB436C25ABE3B400435990F992f677527     
  // Param: 0xae13d989dac2f0debff460ac112a837c89baa7cd, 0x337610d27c682E347C9cD60BD4b3b107C9d34dDd
  // 0x485cc955000000000000000000000000ae13d989dac2f0debff460ac112a837c89baa7cd000000000000000000000000337610d27c682e347c9cd60bd4b3b107c9d34ddd
// Upgradable:      0xc5027079d74def9644f605fe4b65adc5340585ef

// PoolFactory Im:  0x8dd81cfd8dee5e109804d196a722b9c018d9569a
  // Param:         
  // 0x1b03d864c4a93ef2ae2748bc8949017825809d64 
  // 0x368a017dcfa89f7a1db1c37b145791caf40cfd53 
  // 0xc5027079d74def9644f605fe4b65adc5340585ef
  // 0x474959a744be23595de1d05648a71d5815472a8d
  // 1
  // 1000000000000000
  // 2000000000000000
  // 1000000000000000
  // 1000000000000000
  // 3000000000000000
  // 1000
  // true

// Upgradable:      0xe90321bf32a9c1ee284cdd849ed4c37da940d54c

// 0x035a1d4b0000000000000000000000001b03d864c4a93ef2ae2748bc8949017825809d64000000000000000000000000368a017dcfa89f7a1db1c37b145791caf40cfd53000000000000000000000000c5027079d74def9644f605fe4b65adc5340585ef000000000000000000000000474959a744be23595de1d05648a71d5815472a8d000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000071afd498d000000000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000000000aa87bee53800000000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000001

// @zappingpentester