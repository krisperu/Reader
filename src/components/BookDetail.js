import React from 'react'

function BookDetail({ detail }) {
  return (
    <div className="details" key={detail.id}>
       <img class="rounded float-start" src={detail.image} />
       <div className="bk-det">
        <h1 className="det-title">{detail.title}</h1>
        <div className="det-desc"><strong className="strong">Author:</strong> {detail.author.name}</div>
        <div className="det-desc"><strong className="strong">Genre:</strong> {detail.genre.genre}</div>
        <div className="det-desc"><strong className="strong">Length:</strong> {detail.length} pages</div>
        <div className="det-desc"><strong className="strong">Reading Time:</strong> {detail.reading_time} day(s) to read</div>
        <div className="det-desc"><strong className="strong">Description: </strong>{detail.description}</div>
        <div className="det-desc"><strong className="strong">Rating:</strong> {detail.rating} stars</div>
        <div className="det-desc"><strong className="strong">Comment/Review:</strong> {detail.comment}</div>
       </div>
     </div>
  )
}

export default BookDetail

