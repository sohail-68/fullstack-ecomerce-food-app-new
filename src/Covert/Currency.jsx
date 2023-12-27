import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Currency = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(amount);

    console.log(exchangeRate);

  
    useEffect(() => {
      // Fetch the list of currencies
      axios.get('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
          const currencyList = Object.keys(response.data.rates);

          setCurrencies([response.data.base, ...currencyList]);
          setExchangeRate(response.data.rates[toCurrency]);
        })
        .catch(error => console.error('Error fetching currencies:', error));
    }, [toCurrency]);
  
    useEffect(() => {
      // Update the converted amount when the amount or exchange rate changes
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }, [amount, exchangeRate]);
  
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleFromCurrencyChange = (e) => {
      setFromCurrency(e.target.value);
    };
  
    const handleToCurrencyChange = (e) => {
      setToCurrency(e.target.value);
    };
  
    return (
      <div>
        <h1>Currency Converter</h1>
        <div>
          <label>From Currency:</label>
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div>
          <label>To Currency:</label>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <div>
          <p>Converted Amount: {convertedAmount}</p>
        </div>
      </div>
  );
};

export default Currency;
