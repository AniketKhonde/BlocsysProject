import React, { useState, useEffect } from 'react';
import { fetchCryptos } from '../api/crypto';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name-asc');

  useEffect(() => {
    const getCryptos = async () => {
      const data = await fetchCryptos();
      setCryptos(data);
    };
    getCryptos();
  }, []);

  const filteredCryptos = cryptos.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const sortedCryptos = filteredCryptos.sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return a.current_price - b.current_price;
      case 'price-desc':
        return b.current_price - a.current_price;
      case 'marketcap-asc':
        return a.market_cap - b.market_cap;
      case 'marketcap-desc':
        return b.market_cap - a.market_cap;
      case 'supply-asc':
        return a.circulating_supply - b.circulating_supply;
      case 'supply-desc':
        return b.circulating_supply - a.circulating_supply;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by name or symbol"
          className="p-2 border border-gray-300 rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded w-full md:w-1/3"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="marketcap-asc">Market Cap: Low to High</option>
          <option value="marketcap-desc">Market Cap: High to Low</option>
          <option value="supply-asc">Circulating Supply: Low to High</option>
          <option value="supply-desc">Circulating Supply: High to Low</option>
          <option value="name-asc">Name: A-Z</option>
          <option value="name-desc">Name: Z-A</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedCryptos.map(crypto => (
          <div key={crypto.id} className="p-4 border border-gray-300 rounded">
            <img src={crypto.image} alt={crypto.name} className="w-16 h-16 mx-auto mb-2" />
            <h2 className="text-xl font-bold text-center">{crypto.name}</h2>
            <p className="text-center">Symbol: {crypto.symbol.toUpperCase()}</p>
            <p className="text-center">Price: ${crypto.current_price.toFixed(2)}</p>
            <p className="text-center">Market Cap: ${crypto.market_cap.toLocaleString()}</p>
            <p className="text-center">Circulating Supply: {crypto.circulating_supply.toLocaleString()}</p>
            <p className="text-center">Total Supply: {crypto.total_supply ? crypto.total_supply.toLocaleString() : 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
