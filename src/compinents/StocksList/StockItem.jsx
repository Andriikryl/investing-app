import React from 'react'
import stocksApi from '../api/stocksApi'
import { useQuery } from 'react-query'

const fetchStock = async (symbol) => {
    const price = await stocksApi['getPrice'](symbol)
    const profile = await stocksApi['getProfile'](symbol)

    const stock = {...profile.data, price: price.data.c}
    return stock
}

export default function StockItem({symbol, deleteFromFavorite}) {
    const {data, isLoading} = useQuery(`getStock/${symbol}`, () => fetchStock(symbol))
    console.log(data)
  return (
    <li>
      {data ? (
        <div>
          {data.logo ? (
            <img src={data.logo} alt={data.name}></img>
          ) : (
            <div></div>
          )}
          <div>
            <p>{data.name}</p>
            <p>data.ticker</p>
            <p>{data.price} {data.currency}</p>
          </div>
        </div>
      ):(
        <div>Loading....</div>
      )}
      <button onClick={() => deleteFromFavorite(symbol)} >Delete</button>
    </li>
  )
}
