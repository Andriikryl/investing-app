import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query';
import stocksApi from '../api/stocksApi';
import { filterStocks } from '../../helpers/filterStocks';

export default function SearchStocks({addToFavorites}) {
    const { data } = useQuery('getStocks', () => stocksApi['getStocks']())
    const [value, setValue] = useState('');
    const [stocks, setStocks] = useState([]);
    const [focus, setFocus] = useState(false);

    const autocompleteRef = useRef(null)

    useEffect(() => {
        if(!data) return
        const filterredStocks = filterStocks(data,value)
        setStocks(filterredStocks)
    }, [data, value])

    const onBlurHandler = (e) => {
        setTimeout(() => {
            if(autocompleteRef.current && !autocompleteRef.current.contains(e.target)){
                setFocus(false)
            }
        },100)
    }

    const selectStock = (stock) => {
        setValue(stock.description)
        addToFavorites(stock)
    }

    return (
        <div className='flex-group'>
            <div className='input-group'>
            <input
                value={value}
                onFocus={() => setFocus(true)}
                onBlur={onBlurHandler}
                onChange={(e) => setValue(e.target.value)}
                className='search-stock'
                type="text"
                placeholder='search'
            />
            <button onClick={() => setValue('')} className='input-btn'>delet</button>
            </div>
            {focus && stocks.length ? <ul ref={autocompleteRef} className='autocompete'>
                {stocks ? (
                    stocks.map(stock => {
                        return (
                            <li onClick={() => selectStock(stock)}  className='stoks-item' key={stock.figi}>
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
