/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './styles.module.scss'
import { TCourses } from '../../types_interfaces/gpsData';

import React from 'react';

interface IMapProps {
  selectedCourse: TCourses | null
}

const linePaint = {
  'line-color': 'red',
  'line-width': 3
};




function Map({selectedCourse}: IMapProps) {

 

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYWx5c3NvbmpyZGVwYXVsYSIsImEiOiJja3VldWFnczcwNXB4Mm5waGh6MzFtaTN1In0.77fk368XpHheK6pHc4bcHw'
  });

  let list: number[][] = [];
  selectedCourse?.gps.forEach((item)=>{

    list.push([item.longitude,item.latitude])
   
  })


  return <Map
  style="mapbox://styles/mapbox/streets-v9"
  center={selectedCourse ? [ selectedCourse.gps[0].longitude, selectedCourse.gps[0].latitude ] : [-46.28054, -23.963214]}
  zoom={[13.5]}
  className={styles.mapContainer}
  
>
     <GeoJSONLayer

          data={{
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'LineString',
                  'coordinates': [
                   ...list
                  ]
                }
              }
            ]
          }}
          linePaint={linePaint}

      >

      
      </GeoJSONLayer>
</Map>;

}

export default React.memo(Map)