import React from "react";
import NFTCard from "./NFTCard";

const NFTContainer = ({nfts}) => {
  console.log(nfts.length);
  return(
    <div className='nft-container'>
      { nfts.map((nft, index) =>{
        return <NFTCard nft ={nft} key={index}/>
      })}
    </div>
  )
}

export default NFTContainer