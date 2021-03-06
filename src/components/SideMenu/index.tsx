import { NavLink } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import styles from './styles.module.scss'


export function SideMenu() {
    return (
    
      
    <div className={styles.menu}>

      <div className={styles.AccountDetails}>
          <div className={styles.logoContainer}>
            <img src='https://github.com/softruck.png' alt='Logo' loading='lazy'/>
            <text>Softruck</text>
        </div>
      </div>
      <nav className={styles.navContainer}>
              <NavLink  exact to="/"activeClassName={styles.active}>
              {useTranslation('sideMenu.routes')}
              </NavLink >
          
              <NavLink to="/cars" activeClassName={styles.active} >{useTranslation('sideMenu.myCars')}</NavLink>
          
              <NavLink to="/settings" activeClassName={styles.active}>{useTranslation('sideMenu.settings')}</NavLink>
         
        </nav>
        <button className={styles.button}>
        {useTranslation('sideMenu.logout')}
        </button>
    </div>
    
    )
}