import React, { useState } from 'react'
import SearchStocks from '../../compinents/SearchStocks/SearchStocks'
import StocksList from '../../compinents/StocksList/StocksList'

export default function Stocks() {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (symbol) =>{
    const favorite = favorites.find(item => item === symbol)
    if(favorite) return;
    const storage = localStorage.getItem('favorites')
    if(storage){
      localStorage.setItem('favorites', JSON.stringify([symbol, ...JSON.parse(storage)]))
    } else{
      localStorage.setItem('favorites', JSON.stringify([symbol]))
    }
    setFavorites(prev => [symbol, ...prev])
  }

  const deleteFromFavorite = (symbol) =>{
    const storage = localStorage.getItem('favorites')


    const filteredStocks = JSON.parse(storage).filter(favorite => favorite !== symbol)
    localStorage.setItem('favorites', JSON.stringify(filteredStocks))
    setFavorites(filteredStocks)
  }

  console.log(favorites)

  return (
    <section className='stoks'>
        <div className='container'>
          <div className='stoks-box'>
            <div className='flex-group'>
                <h1 className='stocks-title'>Stocks</h1>
                <SearchStocks addToFavorites={addToFavorites}/>
            <StocksList deleteFromFavorite={deleteFromFavorite} stocks={favorites} />
            </div>
          </div>
        </div>
    </section>
  )
}
