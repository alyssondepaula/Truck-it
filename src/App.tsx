import React, { useEffect, useState } from 'react';
import Map from './components/Map';
import './styles/globals.scss';
import styles from './styles.module.scss'
import { Box } from './components/Box';
import { TCourses, TGpsData } from './types_interfaces/gpsData';
import { getDataFake } from './services/getDataFake';

function App() {

  const [courses, setCourses] = useState<TCourses[]>({} as TCourses[]);


  useEffect(()=>{

  
    async function getData() {
        
      const data: TGpsData = await getDataFake();
      setCourses(data.courses);
    }

    
    getData()
  },[])
  


  return (
    <div className={styles.container}>
    <Box data={courses}/>
    <Map />
    </div>
  );
}

export default App;
