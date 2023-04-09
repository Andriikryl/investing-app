import React from 'react'
import StockItem from './StockItem'

export default function StocksList({stocks, deleteFromFavorite}) {
  return (
    <div className='stock-list'>
      <ul>
        {stocks.map(stock =>{
          return (
            <StockItem deleteFromFavorite={deleteFromFavorite} className='stock-list-item' stock={stock} key={stock.figi} />
          )
        })}
      </ul>
    </div>
  )
}
