import { Accordion, Container, Title } from '@mantine/core';
import classes from './FaqSimple.module.css';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const placeholder1 = "To create an account, open the app and tap on the 'Sign Up' button. Fill in the required information, including your email address and a secure password. After submitting, you'll receive a verification email; click the link provided to activate your account.";

const placeholder2 = "The app offers a range of features for free. However, certain advanced functionalities may require a premium subscription. Detailed information about subscription plans and associated features can be found within the app's settings or on our official website.";
const placeholder3 = "The app supports a wide array of cryptocurrencies, including major ones like Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and many others. For a comprehensive list of supported assets, please refer to the 'Supported Assets' section within the app.";
const placeholder4 = "Cryptocurrency prices are updated in real-time, ensuring you have the most current market information at your fingertips.";
const placeholder5 = "Yes, you can personalize your experience by adding your preferred cryptocurrencies to a 'Watchlist.'' This feature allows you to monitor selected assets closely and receive timely updates.";
const placeholder6 = "Navigate to the specific cryptocurrency's page within the app. You'll find interactive charts displaying historical price data over various time frames, such as 24 hours, 7 days, 1 month, and 1 year.";
const placeholder7 = "The app offers multiple time frames, including 1 day, 7 days, 1 month, 3 months, 6 months, 1 year, and all-time data, allowing for comprehensive analysis.";
const placeholder8 = "In the portfolio section, select the 'Add Asset' option. Search for the desired cryptocurrency, enter the amount you own, purchase price, and date of acquisition to track your investments accurately.";
const placeholder9 = "Yes, the app supports integration with various exchanges and wallets. By connecting your accounts through API keys, your transaction data will be imported automatically, keeping your portfolio up-to-date.";
const placeholder10 = "The app calculates performance by comparing the current value of your holdings to the initial investment, providing metrics like total return, percentage change, and profit/loss over selected time periods.";
const placeholder11 = "Access the trading bot feature in the app's menu. Define your trading strategies by setting parameters such as buy/sell conditions, asset selection, and risk management rules.";
const placeholder12 = "The app supports automated trading on major exchanges like Binance, Coinbase Pro, and Kraken. Refer to the app's documentation for a complete list of supported exchanges.";
const placeholder13 = "Yes, automated trading involves risks, including market volatility and potential technical issues. It's essential to thoroughly understand the trading strategies you implement and monitor the bot's performance regularly.";
const placeholder14= "The app utilizes AI algorithms to scan platforms like Twitter, Reddit, and news outlets to gauge market sentiment. It aggregates this data to provide insights into public opinion and potential market movements.";
const placeholder15= "Currently, the app analyzes a predefined set of reputable sources to ensure data accuracy and relevance. Customization options may be considered in future updates.";
const placeholder16= "Price predictions are generated using machine learning models that analyze historical data, market trends, and other relevant factors to forecast potential price movements.";
const placeholder17= "While the app employs advanced models to provide informed predictions, the cryptocurrency market is inherently volatile. Therefore, predictions should be used as one of many tools in your decision-making process, not as guarantees.";
const placeholder18= "Yes, the app allows you to view cryptocurrency prices in various fiat currencies, including USD, INR, EUR, and others. You can select your preferred currency in the app's settings";
const placeholder19= "The app provides real-time conversion rates between supported cryptocurrencies, facilitating easy comparison and calculation.";
const placeholder20 = "The app offers features to monitor NFT market trends, including price movements, popular collections, and recent sales. This helps you stay informed about the dynamic NFT landscape.";
const placeholder21 = "Yes, you can add your NFT holdings to your portfolio by entering details such as the NFT name, purchase price, and current estimated value. This provides a holistic view of your digital assets.";

export function FaqSimple() {
  return (
    <Container size="sm" style={{ maxWidth: 1110, marginTop:'80px', marginBottom:'80px' }}>
      <Title align="center" style={{marginBottom:'50px'}}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated" multiple>

        <Accordion.Item value="another-account" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
         
          <Accordion.Control style={{color:'var(--ftext-color)'}}>What is the Crypto Price Tracker app?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How do I create an account?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder1}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Is the app free to use?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder2}</Accordion.Panel>

          <Accordion.Control style={{color:'var(--ftext-color)'}}>Which cryptocurrencies are supported?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder3}</Accordion.Panel>


          </Accordion.Panel>
        </Accordion.Item>



        <Accordion.Item value="two" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
       
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Real-Time Price Updates</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control  style={{color:'var(--ftext-color)'}}>How frequently are cryptocurrency prices updated?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder4}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Can I customize the list of cryptocurrencies I follow?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder5}</Accordion.Panel>

          </Accordion.Panel>
        </Accordion.Item>



        <Accordion.Item value="three" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Historical Data Visualization</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How can I view historical price charts?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder6}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>What time frames are available for historical data?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder7}</Accordion.Panel>

          </Accordion.Panel>
        </Accordion.Item>



        <Accordion.Item value="four" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Portfolio Tracker</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How do I add cryptocurrencies to my portfolio?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder8}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Can I import data from exchanges or wallets?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder9}</Accordion.Panel>

          <Accordion.Control style={{color:'var(--ftext-color)'}}>How is my portfolio's performance calculated?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder10}</Accordion.Panel>

          </Accordion.Panel>
        </Accordion.Item>


        <Accordion.Item value="five" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Automated Trading Bot</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How do I set up automated trading rules?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder11}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Which exchanges are supported for automated trading?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder12}</Accordion.Panel>

          <Accordion.Control style={{color:'var(--ftext-color)'}}>Is there a risk associated with automated trading?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder13}</Accordion.Panel>

          </Accordion.Panel>
        </Accordion.Item>



        <Accordion.Item value="six" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Social Sentiment Analysis</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How does the app analyze social sentiment?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder14}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Can I customize the sources for sentiment analysis?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder15}</Accordion.Panel>

          </Accordion.Panel>
        </Accordion.Item>


        
        <Accordion.Item value="seven" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Price Prediction</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How are price predictions generated?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder16}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>How accurate are the price predictions?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder17}</Accordion.Panel>

          </Accordion.Panel>
        </Accordion.Item>



        <Accordion.Item value="eight" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Multi-Currency Support</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Can I view prices in different fiat currencies?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder18}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Does the app support conversion between cryptocurrencies?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder19}</Accordion.Panel>

          </Accordion.Panel>
        </Accordion.Item>



        <Accordion.Item value="nine" style={{backdropFilter:'var(--backdrop-blur)',backgroundColor:'var(--bg-color)',borderRadius:'15px',boxShadow:'var(--shadow-lg)', border:'1px solid var(--border-color)'}}>
          <Accordion.Control style={{color:'var(--ftext-color)'}}>NFT Market Integration</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Can I track NFT prices and trends?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder20}</Accordion.Panel>
          
          <Accordion.Control style={{color:'var(--ftext-color)'}}>Is it possible to add my NFT holdings to the portfolio?</Accordion.Control>
          <Accordion.Panel style={{color:'var(--fcontent-color)',fontSize:'14px'}}>{placeholder21}</Accordion.Panel>

          </Accordion.Panel>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
}
