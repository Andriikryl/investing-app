import React from 'react'
import stocksApi from '../api/stocksApi'
import { useQuery } from 'react-query'

const fetchStock = async (symbol) => {
    const price = await stocksApi['getPrice'](symbol)
    const profile = await stocksApi['getProfile'](symbol)

    const stock = {...profile.data, price: price.data.c}
    return stock
}

export default function StockItem({stock, deleteFromFavorite}) {
    const {data, isLoading} = useQuery(`getStock/${stock.symbol}`, () => fetchStock(stock.symbol))
    console.log(data)
  return (
    <li className='stock-group'>
        {data ? <div>
        {data.logo ? <img className='logo' src={data.logo} alt={data.name}></img> : <div></div>}
        <div>
            <p>{data.name}</p>
            <p>{data.ticker}</p>
            <p>{data.price} {data.currency} </p>
        </div>
        </div> : null}
        {stock.description}
        <button onClick={()=> deleteFromFavorite(stock.symbol)}>delete</button>
    </li>
  )
}
