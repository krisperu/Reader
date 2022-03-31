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
    <div >
      {bookItem}
      
      </div>
  )
}

export default Bookspage