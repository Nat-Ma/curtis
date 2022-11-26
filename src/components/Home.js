import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Warning from './Warning'
import Map, { Source, Layer } from 'react-map-gl'

const geojson = {
  type: 'FeatureCollection',
  features: [
    {type: 'Feature', geometry: {type: 'Point', coordinates: [13.4, 52.5]}},
    {type: 'Warning', geometry: {type: 'Point', coordinates: [13.35, 52.55]}}
  ]
}

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
}

// homepage with input form
const Home = () => {
  const [warnings, setWarnings] = useState([])
  const [viewState, setViewState] = React.useState({
    zoom: 11
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    const crd = pos.coords;
    setViewState({
      ...viewState,
      longitude: crd.longitude,
      latitude: crd.latitude
    })
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    const start = async () => {
      const response = await Axios.get('/api/warnings')
      setWarnings(response.data)
    }
    start();
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [])

  const warningElements = warnings.map((warning, i) => {
    return <Warning
      key={i}
      name={warning.name}
      description={warning.description}
      image={warning.imageUrl}
    />
  })

  return (
    <div>
      <p>All Warnings</p>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.MAPBOX_TOKEN}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
      {warningElements}
    </div>
  )
};

export default Home
