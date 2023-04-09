import React, { useState } from 'react'
import SearchStocks from '../../compinents/SearchStocks/SearchStocks'
import StocksList from '../../compinents/StocksList/StocksList'

export default function Stocks() {
  const [favorites, setFavorites] = useState([])

  const addSymbolToFavorites = (stock) =>{
    const favorite = favorites.find(item => item.figi === stock.figi)
    if(favorite) return;
    setFavorites(prev => [stock, ...prev])
  }

  console.log(favorites)

  return (
    <section className='stoks'>
        <div className='container'>
          <div className='stoks-box'>
            <div className='flex-group'>
                <h1 className='stocks-title'>Stocks</h1>
                <SearchStocks addSymbolToFavorites={addSymbolToFavorites}/>
            <StocksList stocks={favorites} />
            </div>
          </div>
        </div>
    </section>
  )
}
