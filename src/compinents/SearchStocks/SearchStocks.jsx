import React, { useState } from 'react'

export default function SearchStocks() {

    const [value, setValue] = useState('');


  return (
    <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} className='search-stock' type="text" placeholder='search' />
        <p>{value}</p>
    </div>
  )
}
