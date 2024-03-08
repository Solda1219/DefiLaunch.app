import React, { useEffect } from 'react';

const Bridge = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@layerzerolabs/stargate-ui@latest/element.js';
    script.defer = true;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <stargate-widget
        theme="dark"
        partnerId="105"
        feeCollector="0x748195e233532cAa60FdE7b048c7078bC8Bc5c04"
        tenthBps="10"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Bridge;
