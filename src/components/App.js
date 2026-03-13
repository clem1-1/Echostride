import React from 'react';
import Swap from './components/Swap';
import Liquidity from './components/Liquidity';
import DemoWallet from './components/DemoWallet';  // import your new component

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Echostride</h1>
      <Swap />
      <Liquidity />
      <DemoWallet />  {/* your new component */}
    </div>
  );
}

export default App;
