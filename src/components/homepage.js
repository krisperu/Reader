import React from 'react'
import { Link } from 'react-router-dom'
import BookCover from './BookCover'

function Homepage({bookCover}) {
  const coverImage = bookCover.map((cover) => (
    <div key={cover.id}><BookCover image = {cover.image}/></div>
  ))

  return (
    <div className="homepage position-relative">
      <div className="home-back">
        <h1 className="title">Reader</h1>
        <p>Tired of keeping track of all the books you have read? Let Reader do all the heavy lifting for you! Add the books you have finished and what you thought about them and come back any time to see them.</p>
        <h3>Read Books</h3>
        <div className="carousel">{coverImage}</div>
        <div className="button-area d-grid gap-2 d-md-block">
          <Link type="button" className="btn btn-outline-light btn-lg" id="authorBtn" to="/author" >Authors</Link>
          <Link type="button" className="btn btn-outline-light btn-lg" id="formBtn" to="/bookform">Add a Book</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage