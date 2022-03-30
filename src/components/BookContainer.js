import React from 'react'

function BookContainer({ id, image, title}) {
  return (
    <div className="card">
    <div className="image">
      <img className="im" src={image} alt={id} />
    </div>
    <div className="details">
      <strong>{title}</strong>
    </div>
  </div>
  )
}

export default BookContainer