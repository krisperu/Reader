import React from 'react'

function BookContainer({ book, onDeleteBook, handleCardClick }) {

  function handleDeleteClick(e) {
    e.stopPropagation()
    fetch(`http://localhost:9292/books//${book.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteBook(book));
  }

  return (
    <div onClick={()=> handleCardClick(book)}>
      <div className="card">
        <div className="image">
          <img className="card-img-top" src={book.image} alt={book.id} />
        </div>
        <div className="card-title">
          <strong>{book.title}</strong>
        </div>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
    
  )
}

export default BookContainer