import React from 'react';
import { networkLists, supportNetwork } from '../hooks/network'; // Adjust the path as needed

const NetworkSelector = ({ onNetworkSelected }) => {
  const handleNetworkClick = (chainId) => {
    const network = supportNetwork[chainId];
    if (network.available) {
      onNetworkSelected(chainId);
    } else {
      alert('This network is coming soon!');
    }
  };

  return (
    <div>
      {networkLists.map((network) => (
        <button
          key={network.chainId}
          onClick={() => handleNetworkClick(network.chainId)}
          disabled={!network.available}
        >
          {network.label}
        </button>
      ))}
    </div>
  );
};

export default NetworkSelector;
