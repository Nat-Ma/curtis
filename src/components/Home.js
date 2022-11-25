import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Warning from './Warning'
import Map from 'react-map-gl'

// homepage with input form
const Home = () => {
  const [warnings, setWarnings] = useState([])

  useEffect(() => {
    const start = async () => {
      const response = await Axios.get('/api/warnings')
      setWarnings(response.data)
    }
    start();
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
        initialViewState={{
          longitude: 13.395,
          latitude: 52.515,
          zoom: 11
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.MAPBOX_TOKEN}
      />
      {warningElements}
    </div>
  )
};

export default Home
