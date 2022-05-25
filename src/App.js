import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';
import React from "react";
import {
  Form,
  Image,
  Button,
  ProgressBar,
  Container,
  Badge
} from 'react-bootstrap'

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;

const App = () => {
  // Render Methods
  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  return (
    
    <div className="App">
   
   <div className="connectWalletDiv">
      {renderNotConnectedContainer()}
      </div>
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">NFT MAKER</p>
          <p className="sub-text">
          Create your NFT's and List to OpenaSea TestNet.
          </p>
         
         <div className="add-image-div">
         <div>
            <Form>
                <Form.Control
                    required
                    type='file'
                    accept='image/*'
                    
                    className='mb-3'
                />

              
            </Form>
        </div>
         </div>

        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
