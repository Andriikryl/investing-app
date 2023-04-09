import React from 'react'

export default function StockItem({stock, deleteFromFavorite}) {
  return (
    <li className='stock-group'>
        {stock.description}
        <button onClick={()=> deleteFromFavorite(stock.symbol)}>delete</button>
    </li>
  )
}
