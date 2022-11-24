import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Warning from './Warning'

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
      {warningElements}
    </div>
  )
};

export default Home
