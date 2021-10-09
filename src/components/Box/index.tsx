import { TCourses } from '../../types_interfaces/gpsData';
import styles from './styles.module.scss'

interface IBoxProps {
    data: TCourses[]
}

export function Box({data}: IBoxProps): JSX.Element {



    return (
        <div className={styles.container}>

            <div>
                <text>Exibir rotas {data[0].distance}</text>
            </div>

            <form>
            </form>

        </div>
    );
}
