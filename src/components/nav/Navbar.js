import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import cn from 'classnames'
import { GlobalContext } from '../../context/GlobalContext'

function Navbar() {
  const { container, selected, item } = styles
  const globalContext = useContext(GlobalContext)

  return (
    <div className={container}>
      <div className={cn(styles['item-wrapper'], { [selected]: globalContext.currentPage === 'kbo' })}>
        <Link to="/" className={item}>
          KBO
        </Link>
      </div>
      <div className={cn(styles['item-wrapper'], { [selected]: globalContext.currentPage === 'lol' })}>
        <Link to="/lol" className={item}>
          LOL
        </Link>
      </div>
      <div className={cn(styles['item-wrapper'], { [selected]: globalContext.currentPage === 'nba' })}>
        <Link to="/nba" className={item}>
          NBA
        </Link>
      </div>
    </div>
  )
}

export default Navbar