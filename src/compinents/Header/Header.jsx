import React from 'react'
import style from './style.module.css'
import Logo from '../Logo/Logo'
import HeaderMenu from '../HeaderMenu/HeaderMenu'

export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.container}>
        <Logo/>
        <HeaderMenu/>
        </div>
    </header>
  )
}
