const NFTCard = ({nft}) => {
  return (
    <div className='card nft-card'>
      <img src={nft.meta.content[1].url} className='nft-image' />
      <div className='card content-item'>
        Contract Address:
      </div>
      <div className='card address'>
        {nft.contract}
      </div>
      <div className='card content-item'>
        Collection Address:
      </div>
      <div className='card address'>
        {nft.collection}
      </div>
      <div className='card content-item'>
        NFT Name:
      </div>
      <div className='card'>
        {nft.meta.name}
      </div>
      <div className='card content-item'>
        Collection Description:
      </div>
      <p className='card'>
        {nft.meta.description}
      </p>
    </div>
  )
}

export default NFTCard