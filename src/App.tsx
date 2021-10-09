import React from 'react';
import Map from './components/Map';
import './styles/globals.scss';
import styles from './styles.module.scss'
import { Box } from './components/Box';


function App() {

  

  return (
    <div className={styles.container}>
    <Box/>
    <Map/>
    </div>
  );
}

export default App;
