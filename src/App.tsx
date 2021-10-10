import { useState } from 'react';
import Map from './components/Map';
import './styles/globals.scss';
import styles from './styles.module.scss'
import { Box } from './components/Box';
import { TCourses } from './types_interfaces/gpsData';

function App() {

  const [selectedCourse, setSelectedCourse] = useState<TCourses | null>(null);


  return (
    <div className={styles.container}>
    <Box setSelectedCourse={setSelectedCourse}/>
    <Map selectedCourse={selectedCourse}/>
    </div>
  );
}

export default App;
