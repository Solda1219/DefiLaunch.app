import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNetwork } from 'wagmi';
import { defaultChains } from 'config/constants/chains';

const useRequiredChainId = () => {
  const { chain } = useNetwork();
  const location = useLocation();
  let chainIdFromQuery = new URLSearchParams(location.search).get('chainId');
  const [requiredChainId, setRequiredChainId] = useState(
    defaultChains.find((ele) => Number(ele.id) === Number(chainIdFromQuery))
      ? Number(chainIdFromQuery)
      : chain
      ? chain?.id
      : defaultChains[0].id
  );

  useEffect(() => {
    setRequiredChainId(
      defaultChains.find((ele) => Number(ele.id) === Number(chainIdFromQuery))
        ? Number(chainIdFromQuery)
        : chain?.id
        ? chain?.id
        : defaultChains[0].id
    );
  }, [requiredChainId, chain, chainIdFromQuery]);

  return requiredChainId;
};

export default useRequiredChainId;
