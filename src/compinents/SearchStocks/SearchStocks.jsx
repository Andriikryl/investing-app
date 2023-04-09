import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import stocksApi from '../api/stocksApi';
import { filterStocks } from '../../helpers/filterStocks';

export default function SearchStocks() {
    const { data } = useQuery('getStocks', () => stocksApi['getStocks']())
    const [value, setValue] = useState('');
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        if(!data) return
        // const filterredStocks = data.filter(stock => {
        //     return stock.description.toLowerCase().includes(value.toLocaleLowerCase())
        // })
        // .slice(0,9)
        const filterredStocks = filterStocks(data,value)
        setStocks(filterredStocks)
    }, [data, value])

    return (
        <div className='flex-group'>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className='search-stock'
                type="text"
                placeholder='search'
            />
            <ul className='autocompete'>
                {stocks ? (
                    stocks.map(stock => {
                        return (
                            <li className='stoks-item' key={stock.figi}>
                                {stock.description}
                            </li>
                        )
                    })
                ) : (
                    <li>Loading...</li>
                )}
            </ul>
        </div>
    )
}
