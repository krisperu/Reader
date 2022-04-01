import React from 'react'
import { Link } from 'react-router-dom'
import BookCover from './BookCover'

function Homepage({bookCover}) {
  const coverImage = bookCover.map((cover) => (
    <div key={cover.id}><BookCover image = {cover.image}/></div>
  ))


  return (
    <div className="homepage position-relative">
      <h1 className="title position-absolute top-0 start-50 translate-middle-x">Reader</h1>
      <div className="carousel">{coverImage}</div>
      <div className="button-area">
        <Link className="button" id="authorBtn" to="/author" >Authors</Link>
        <Link className="button" id="formBtn" to="/bookform">Add a Book</Link>
      </div>
    </div>
  )
}

export default Homepage