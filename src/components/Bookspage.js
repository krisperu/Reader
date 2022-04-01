import React from 'react'
import BookContainer from './BookContainer'

function Bookspage({ books, onDeleteBook, onCardClick }) {
  const bookItem = books.map((book) => (
    <div key={book.id}>
      <BookContainer 
        book={book}
        onDeleteBook={onDeleteBook}
        handleCardClick = {onCardClick}
      />
    </div>
  ))

  return (
    <>
      <div className="book-header">
        <h2>Your Books</h2>
        <p id="books-p">Status: Read | For: All-Time</p>
      </div>
      <div className="container">
        {bookItem}
      </div>
    </>
  )
}

export default Bookspage