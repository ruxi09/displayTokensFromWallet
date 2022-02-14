import './App.css';
import { useEffect, useState } from "react";
import NFTContainer from './NFTContainer';

function App() {

  const [walletAddress, setWalletAddress] = useState(null)
  const [nfts, setNfts] = useState([])

  const detectProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      var homepage = "https://metamask.io";
      window.alert("No Ethereum browser detected! Check out MetaMask");
      if (window.confirm("No Ethereum browser detected! Check out MetaMask")) {
        window.location.href= homepage;
      };
    }
    return provider;
  };

  const onLoginHandler = async () => {
    const provider = detectProvider();
    if (provider) {
      if (provider !== window.ethereum) {
        console.error(
          "Not window.ethereum provider. Do you have multiple wallet installed ?"
        );
      }
    }
  }

  const connectWallet = async () => {
    onLoginHandler()
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method : 'eth_requestAccounts'});

      setWalletAddress(accounts[0])
    }
  }

  const getNFTData = async () => {
    if(!walletAddress) return;
    console.log(walletAddress);
    // const response = await fetch('https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x60f80121c31a0d46b5279700f9df786054aa5ee5')
    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)
    const data = await response.json()
    setNfts(data.items)

  }

  useEffect(() => {
    getNFTData()
  }, [walletAddress])

  return (
    <div className="App">
      <div className= 'text'>
        Account: {walletAddress}
      </div>
      <button className='connect-button' onClick = {connectWallet}>
        Connect Wallet
      </button>
      <NFTContainer nfts={nfts}/>
    </div>
  );
}

export default App;
