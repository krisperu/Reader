import React from 'react'
import BookContainer from './BookContainer'

function Bookspage({ books, onDeleteBook }) {
  const bookItem = books.map((book) => (
    <div key={book.id}>
      <BookContainer 
        book={book}
        onDeleteBook={onDeleteBook}
      />
    </div>
  ))

  function handleClick() {
    console.log(`Click works`)
  }


  return (
    <div className="container" onClick={handleClick}>
      {bookItem}
      
      </div>
  )
}

export default Bookspage