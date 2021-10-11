/* eslint-disable react/style-prop-object */
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { TCourses } from '../../types_interfaces/gpsData';

interface IMapProps {
  selectedCourse: TCourses | null
}


interface ILine{

  coordinates: any[][]

}

const geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': [
          [
            -46.28054,
            -23.963214,
          ],
         [
            -46.280544,
            -23.96325,
         ],
        [
          -46.280536,
            -23.96319,
         ]
        ]
      }
    }
  ]
};

const linePaint = {
  'line-color': 'red',
  'line-width': 5
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

  console.log(list)


 

  return <Map
  style="mapbox://styles/mapbox/streets-v9"
  center={selectedCourse ? [ selectedCourse.gps[0].longitude, selectedCourse.gps[0].latitude ] : [-46.28054, -23.963214]}
  zoom={[13.5]}
  containerStyle={{
    height: '90vh',
    width: '82vw'
  }}
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
      />
  
</Map>;

}

export default Map