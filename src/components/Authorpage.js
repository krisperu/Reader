import React from 'react'
import AuthorCard from './AuthorCard'

function Authorpage({ author }) {
    const authorItem = author.map((auth) => (
      <AuthorCard key={auth.id} auth={auth} books={auth.books.map((b) => <li className="poo" key={b.title + b.image}>{b.title}</li>)}/>
    ))

  return (
    <div className="author-card">{authorItem}</div>
  )
}

export default Authorpage
