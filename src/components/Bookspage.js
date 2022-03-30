import React from 'react'
import BookContainer from './BookContainer'

function Bookspage({ books }) {
  const bookItem = books.map((book) => (
    <div>
      <BookContainer 
        key={book.id}
        id={book.id}
        image={book.image}
        title={book.title}
      />
    </div>
  ))
  return (
    <div className="container">{bookItem}</div>
  )
}

export default Bookspage