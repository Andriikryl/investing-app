import React from 'react'
import StockItem from './StockItem'

export default function StocksList({stocks}) {
  return (
    <div className='stock-list'>
      <ul>
        {stocks.map(stock =>{
          return (
            <StockItem className='stock-list-item' stock={stock} key={stock.figi} />
          )
        })}
      </ul>
    </div>
  )
}
