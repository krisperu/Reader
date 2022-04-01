import React from 'react'

function BookDetail({ detail }) {
  return (
    <div key={detail.id}>
       <img src={detail.image} />
       <h1>{detail.title}</h1>
       <div>{detail.author.name}</div>
       <div>{detail.genre.genre}</div>
       <div>{detail.length} pages</div>
       <div>{detail.reading_time} day(s) to read</div>
       <div>{detail.description}</div>
       <div>{detail.rating} stars</div>
       <div>{detail.comment}</div>
     </div>
  )
}

export default BookDetail

