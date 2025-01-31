import styles from './HotCoins.module.css';
import { useState, useEffect } from 'react';

const HotCoins = () => {
  const [sections, setSections] = useState([
    { 
      title: "Store > New Listing",
      coins: [],
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=id_asc&per_page=4'
    },
    {
      title: "Store > Top Gainer Coin",
      coins: [],
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc&per_page=4'
    },
    {
      title: "Store > Top Volume Coin",
      coins: [],
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=4'
    }
  ]);

  const fetchData = async () => {
    try {
      const updatedSections = await Promise.all(
        sections.map(async (section) => {
          const response = await fetch(section.url);
          const data = await response.json();
          return {
            ...section,
            coins: data.map(coin => ({
              name: coin.symbol.toUpperCase(),
              price: `$${coin.current_price.toLocaleString(undefined, { maximumFractionDigits: 4 })}`,
              change: `${coin.price_change_percentage_24h?.toFixed(2) || 0.00}%`
            }))
          };
        })
      );
      setSections(updatedSections);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 30000); // 30 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hot Coins</h2>
      
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>
          <div className={styles.coinsContainer}>
            {section.coins.map((coin, coinIndex) => (
              <div key={`${index}-${coinIndex}`} className={styles.coinCard}>
                <div className={styles.coinInfo}>
                  <span className={styles.coinName}>{coin.name}</span>
                  <span className={styles.coinPrice}>{coin.price}</span>
                </div>
                <span className={`${styles.change} ${
                  coin.change.startsWith('-') ? styles.negative : styles.positive
                }`}>
                  {coin.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotCoins;