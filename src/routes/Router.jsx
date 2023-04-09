import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/stocks' element={<div>stocks</div>}/>
        <Route path='*' element={<div>page not found</div>}/>
    </Routes>
  )
}
