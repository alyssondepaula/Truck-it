import { useEffect, useState } from 'react';
import { getDataFake } from '../../services/getDataFake';
import { TCourses, TGpsData } from '../../types_interfaces/gpsData';
import Select from 'react-select'
import styles from './styles.module.scss'

interface IBoxProps {
    selectedCourse: TCourses | null
    setSelectedCourse: React.Dispatch<React.SetStateAction<TCourses | null>>
}

export function Box({selectedCourse,setSelectedCourse}: IBoxProps): JSX.Element {


     const [courses, setCourses] = useState<TCourses[]>({} as TCourses[]);


    useEffect(()=>{
  
      async function getData() {
          
        const data: TGpsData = await getDataFake();
        setCourses(data.courses)
        setSelectedCourse(data.courses[0]);
      }
  
  
  
      getData()
  
  
    },[setSelectedCourse])

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const convertiondate = (time: string): string =>{

       let date = new Date(time);

       let formatDate = 
       `${date.getDate()}/${date.getMonth()<10 ? '0' : ''}${date.getMonth()+1}/${date.getFullYear()} 
       - ${date.getHours()}:${date.getMinutes()<10 ? '0' : ''}${date.getMinutes()}`
       return formatDate;
    }  
      
    const SelectComponent = () => (
        <Select options={courses} 
        getOptionLabel={(course)=> convertiondate(course.start_at)}
        getOptionValue={(course)=> course.start_at}
        
        defaultValue={selectedCourse}
        isSearchable={false}
        isMulti={false}
        onChange={changeCourse}
        />
      )

    const changeCourse = (event: any) => {
    console.log("changed", event);
    
    setSelectedCourse(event)
   }



    return (
        <div className={styles.container}>

            <div>
                <text>Exibir rotas</text>
            </div>

            <form>
                <label>Selecione o horario de saida do carro:</label>
                <SelectComponent/>
            </form>

        </div>
    );
}
