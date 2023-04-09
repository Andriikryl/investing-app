import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import stocksApi from '../api/stocksApi';
import { filterStocks } from '../../helpers/filterStocks';

export default function SearchStocks() {
    const { data } = useQuery('getStocks', () => stocksApi['getStocks']())
    const [value, setValue] = useState('');
    const [stocks, setStocks] = useState([]);
    const [focus, setFocus] = useState(false);

    useEffect(() => {
        if(!data) return
        const filterredStocks = filterStocks(data,value)
        setStocks(filterredStocks)
    }, [data, value])

    return (
        <div className='flex-group'>
            <input
                value={value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={(e) => setValue(e.target.value)}
                className='search-stock'
                type="text"
                placeholder='search'
            />
            {focus && stocks.length ? <ul className='autocompete'>
                {stocks ? (
                    stocks.map(stock => {
                        return (
                            <li  className='stoks-item' key={stock.figi}>
                                {stock.description}
                            </li>
                        )
                    })
                ) : (
                    <li>Loading...</li>
                )}
            </ul> : null}
        </div>
    )
}
