/* eslint-disable react/style-prop-object */
import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


function Map() {

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYWx5c3NvbmpyZGVwYXVsYSIsImEiOiJja3VldWFnczcwNXB4Mm5waGh6MzFtaTN1In0.77fk368XpHheK6pHc4bcHw'
  });

  return <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>
</Map>;

}

export default React.memo(Map)