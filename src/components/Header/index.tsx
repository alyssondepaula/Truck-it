import { FlagSelector } from '../FlagSelector'
import styles from './styles.module.scss'

export function Header() {


    return <div className={styles.container}>
        <FlagSelector/>
    </div>
}