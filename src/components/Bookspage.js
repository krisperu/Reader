import React from 'react'
import BookContainer from './BookContainer'

function Bookspage({ books, setBooks }) {
  const bookItem = books.map((book) => (
    <div key={book.id}>
      <BookContainer 
        id={book.id}
        image={book.image}
        title={book.title}
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