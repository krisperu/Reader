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
    <div className="card" onClick={()=> handleCardClick(book)}>
      <div>
        <img className="card-img" src={book.image} alt={book.id} />
      </div>
      <div className="card-title">
        <strong>{book.title}</strong>
      </div>
      <button className="del-btn" onClick={handleDeleteClick}>Delete</button>
    </div>
    
  )
}

export default BookContainer