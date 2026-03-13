import React, { useState } from 'react';

function DemoWallet() {
  const [balances, setBalances] = useState({ BTC: 100, ECHO: 500 });
  const [fromToken, setFromToken] = useState('BTC');
  const [toToken, setToToken] = useState('ECHO');
  const [amount, setAmount] = useState('');

  const handleSwap = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
    if (balances[fromToken] < amt) {
      alert(`Insufficient ${fromToken} balance!`);
      return;
    }
    setBalances({
      ...balances,
      [fromToken]: balances[fromToken] - amt,
      [toToken]: balances[toToken] + amt
    });
    alert(`Swapped ${amt} ${fromToken} → ${toToken} on Echostride demo!`);
    setAmount('');
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', marginTop: '1rem', backgroundColor: '#f5f5f5' }}>
      <h2>Demo Wallet</h2>
      <p>BTC: {balances.BTC}</p>
      <p>ECHO: {balances.ECHO}</p>
      <select value={fromToken} onChange={e => setFromToken(e.target.value)}>
        <option value="BTC">BTC</option>
        <option value="ECHO">ECHO</option>
      </select>
      <select value={toToken} onChange={e => setToToken(e.target.value)}>
        <option value="BTC">BTC</option>
        <option value="ECHO">ECHO</option>
      </select>
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
}

export default DemoWallet;
