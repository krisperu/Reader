import React from 'react'

function BookContainer({ id, image, title}) {
  return (
    <div>
      <div className="card">
        <div className="image">
          <img className="card-img-top" src={image} alt={id} />
        </div>
        <div className="card-title">
          <strong>{title}</strong>
        </div>
      </div>
    </div>
    
  )
}

export default BookContainer