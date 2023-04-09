import React from 'react'
import SearchStocks from '../../compinents/SearchStocks/SearchStocks'

export default function Stocks() {
  return (
    <section className='stoks'>
        <div className='container'>
            <div className='flex-group'>
                <h1 className='stocks-title'>Stocks</h1>
                <SearchStocks/>
            </div>
        </div>
    </section>
  )
}
