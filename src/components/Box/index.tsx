import { useEffect } from 'react';
import { getDataFake } from '../../services/getDataFake';
import { TCourses, TGpsData } from '../../types_interfaces/gpsData';
import styles from './styles.module.scss'

interface IBoxProps {
    setSelectedCourse: React.Dispatch<React.SetStateAction<TCourses | null>>
}

export function Box({setSelectedCourse}: IBoxProps): JSX.Element {


  //  const [courses, setCourses] = useState<TCourses[]>({} as TCourses[]);


    useEffect(()=>{
  
      async function getData() {
          
        const data: TGpsData = await getDataFake();
        setSelectedCourse(data.courses[1]);
      }
  
  
  
      getData()
  
  
    },[setSelectedCourse])



    return (
        <div className={styles.container}>

            <div>
                <text>Exibir rotas</text>
            </div>

            <form>
            </form>

        </div>
    );
}
