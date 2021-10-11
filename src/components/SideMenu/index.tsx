import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

export function SideMenu() {
    return (
    
      
    <div className={styles.menu}>

      <div className={styles.AccountDetails}>
          <div className={styles.logoContainer}>
            <img src='https://github.com/softruck.png' alt='Logo' loading='lazy'/>
            <text>SoftTruck</text>
        </div>
      </div>
      <nav className={styles.navContainer}>
              <NavLink  exact to="/"activeClassName={styles.active}>
                Mapa da Frota
              </NavLink >
          
              <NavLink to="/about" activeClassName={styles.active} >About</NavLink>
          
              <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
         
        </nav>
        <button className={styles.button}>
            Deslogar
        </button>
    </div>
    
    )
}