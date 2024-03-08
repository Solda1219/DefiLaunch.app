import * as React from 'react';
import { usePublicClient, useWalletClient } from 'wagmi';
import { providers } from 'ethers';

export function publicClientToProvider(publicClient) {
  try {
    const { chain, transport } = publicClient;
    const network = {
      chainId: chain.id,
      name: chain.name,
      ensAddress: chain.contracts?.ensRegistry?.address,
    };
    if (transport.type === 'fallback')
      return new providers.FallbackProvider(
        transport.transports.map(({ value }) => new providers.JsonRpcProvider(value?.url, network))
      );
    return new providers.JsonRpcProvider(transport.url, network);
  } catch (err) {
    return null;
  }
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider(chainId) {
  const publicClient = usePublicClient({ chainId });
  return React.useMemo(() => publicClientToProvider(publicClient), [publicClient]);
}
export function walletClientToSigner(walletClient) {
  try {
    const { account, chain, transport } = walletClient;
    const network = {
      chainId: chain.id,
      name: chain.name,
      ensAddress: chain.contracts?.ensRegistry?.address,
    };
    const provider = new providers.Web3Provider(transport, network);
    const signer = provider.getSigner(account.address);
    return signer;
  } catch (err) {
    return null;
  }
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner(chainId) {
  const { data: walletClient } = useWalletClient({ chainId });
  return React.useMemo(() => (walletClient ? walletClientToSigner(walletClient) : undefined), [walletClient]);
}
