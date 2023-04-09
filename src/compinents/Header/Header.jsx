import React from 'react'
import style from './style.module.css'
import Logo from '../Logo/Logo'

export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.container}>
        <Logo/>
        </div>
    </header>
  )
}
