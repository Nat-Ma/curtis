import React from 'react'

// homepage with input form
const Warning = ({ name, description, image }) => {
  return (
    <div>
      <img src={image} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
)};

export default Warning
